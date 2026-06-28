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

window.AUTO_CODEautocode = new AutoCode('HYXJQS',"AUTO_CODE",false,"AUTO_CODE",undefined
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
						autoCode: "HYXJQS",
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
									autoCode: "HYXJQS",
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
 $("#TYZKTZ").show(); 
 
 
 if(floweditor.flowModel.activityname == 'task1'){
 
 $("#R505Y6oBvWa6Y03KkR08CY05yNGqt1Iy>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 6){
 $(this).hide();
 
 }
});
 }else{
 if(floweditor.flowModel.activityname == 'task2' || 
 floweditor.flowModel.activityname == 'task3'|| 
 floweditor.flowModel.activityname == 'task4'||
 floweditor.flowModel.activityname == 'task5'||
 floweditor.flowModel.activityname == 'task6'
 
 
 ){
 
 $("#R505Y6oBvWa6Y03KkR08CY05yNGqt1Iy>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 6){
 $(this).hide();
 
 }
});
 }
 
 
 }
 
 
 
 };
}else{
 //$("#O94T8vVcyroCyXDCvtjgRGM3lTei8oNR>tbody>tr:eq(4)").hide();
 $("#R505Y6oBvWa6Y03KkR08CY05yNGqt1Iy>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 6){
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
                , "20","select t.party_name,t.id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"新成立党支部名称","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"PARTY_NAME","targetName":"PARTY_NAME_NEW","targetNameName":"新成立党支部名称","display":"新成立党支部名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowPARTY_NAME_NEW,this.getParamsValue,'','HYXJQS-PARTY_NAME_NEW',this.jsSuccess);


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
                , "20","select * from DYN_THREE_FOUR t",'[{"label":"三会一课名称","width":"50","align":"center","orderBy":"","name":"MEET_NAME"},{"label":"三会一课ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"}]','[{"name":"MEET_NAME","targetName":"THREE_FOUR_NAME","targetNameName":"三会一课名称","display":"三会一课名称","transform":"","lookupType":"","filter":true},{"name":"ID","targetName":"threeFourId1","targetNameName":"三会一课ID","display":"三会一课ID","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowTHREE_FOUR_NAME,this.getParamsValue,'','HYXJQS-THREE_FOUR_NAME',this.jsSuccess);


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
    $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V"){
        return;
    }

    if (required){
        $("#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V").attr("required","required");
   }else{
        $("#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V").removeAttr("required");
        $("#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V").attr("required");
    var bpmRequire = $("#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V"){
        return;
    }
    if(operability){
        $("#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V").show();
    }else{
        $("#SuoTlmNsdb5QxpaqPs1jlE452EaGxQ8V").hide();
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
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f30182b3857aff1a4a'
	});

		
        });
        


attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK"){
        return;
    }

    if (required){
        $("#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK").attr("required","required");
   }else{
        $("#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK").removeAttr("required");
        $("#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK").attr("required");
    var bpmRequire = $("#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK"){
        return;
    }
    if(operability){
        $("#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK").show();
    }else{
        $("#WpYXHWmMCJOnrU3Xd1RgOx6c95cjZsoK").hide();
    }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "TYZKTZ"){
		return;
	}
	if(operability){
		$("#TYZKTZ").show();
	}else{
		$("#TYZKTZ").hide();
	}
});

//按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
if (tagId != "TYZKTZ"){
return;
}
if(operability){
$("#TYZKTZ").css("display","inline-block");
}else{
$("#TYZKTZ").css("display","none");
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

            $('#TYZKTZ').on('click',function(e){
            layer.open({ 
		type: 2, 
		area: ['80%', '80%'], 
		title: '发起流程', 
		skin: 'bs-modal', 
		maxmin: false, 
		content: ' platform/eform/bpmsCRUDClient/toDetail?formInfoId=948e83e3828f72f30182a56fc1977f03&id=948e83e3828f72f30182b38915021a83'
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
