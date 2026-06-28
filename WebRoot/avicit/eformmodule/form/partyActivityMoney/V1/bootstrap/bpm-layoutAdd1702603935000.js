
var attachBpmInfo = {
    delOrAdd : [],
    editSecret:[]
}
var attachBpmId;

$(function(){
	



if ($("input[name='REQUEST_DATE']").val()==''||$("input[name='REQUEST_DATE']").val()==null||$("input[name='REQUEST_DATE']").val()==undefined ){
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
	$("#REQUEST_DATE").val(macoValue);
}



$("#AUTO_CODE").attr("initvalue",$("input[name='AUTO_CODE']",window.pageParams.content||document).val());
if ($("input[name='AUTO_CODE']",window.pageParams.content||document).val()==''||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==null||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==undefined ){

window.AUTO_CODEautocode = new AutoCode('partyAcivityMoneyCode',"AUTO_CODE",false,"AUTO_CODE",undefined
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
						autoCode: "partyAcivityMoneyCode",
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
									autoCode: "partyAcivityMoneyCode",
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
			exp: "@{departmentFullName}"
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





	HANDLERDetailCol = 'HANDLER';
	

function HANDLERClickFun(){
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
				this.setRowHANDLER = function(mapping,rowData){
					

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

						if(HANDLERDetailCol == mapVer.targetName){
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
                , "20","select t.name,t.USER_ID,t.party_name,t.PARTY_ID from PARTY_MEMBER_ORGANIZATION_VIEW t",'[{"label":"党员","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党员ID","width":"50","hidden":true,"align":"center","orderBy":"2","name":"USER_ID"},{"label":"党支部","width":"50","align":"center","orderBy":"3","name":"PARTY_NAME"},{"label":"党支部ID","width":"50","hidden":true,"align":"center","orderBy":"4","name":"PARTY_ID"}]','[{"name":"NAME","targetName":"HANDLER","targetNameName":"经办人","display":"党员","transform":"","lookupType":"","filter":true},{"name":"USER_ID","targetName":"HANDLER_ID","targetNameName":"经办人ID","display":"党员ID","transform":"","lookupType":"","filter":false},{"name":"PARTY_NAME","targetName":"PARTY_NAME","targetNameName":"党支部","display":"党支部","transform":"","lookupType":"","filter":true},{"name":"PARTY_ID","targetName":"PARTY_ID","targetNameName":"党支部ID","display":"党支部ID","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowHANDLER,this.getParamsValue,'','partyActivityMoney-HANDLER',this.jsSuccess);


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

						if(HANDLERDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#HANDLER").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function HANDLERDetail(id){
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


			$('#HANDLER')
	.on(' focus',function(e){
	HANDLERClickFun();
	this.blur();
});

/*
$('#HANDLERButton').on('click',function(e){
	HANDLERClickFun();
	this.blur();
});

$('#HANDLERButton').click(function(event) {
   $('#HANDLER').trigger('focus');
});*/




    // debugger;
if(typeof(EformFlow) != "undefined"){

 EformFlow.prototype.afterControlFormInput=function(){
 //debugger;
 if(!$("#selType1").is(":checked") 
 && !$("#selType2").is(":checked")
 && !$("#selType3").is(":checked")
 && !$("#selType4").is(":checked")
 && !$("#selType5").is(":checked")
 && !$("#selType6").is(":checked")
 && !$("#selType7").is(":checked")
 && !$("#selType8").is(":checked")){
 
$("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 6){
 $(this).hide();
 
 }
});
}else{
$("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 6){
 $(this).hide();
 
 }
});
if($("#selType1").is(":checked")){
 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(6)").show();
 $("#DYN_PA_XXZL1_control").show();
 $('#DYN_PA_XXZL1').jqGrid('resizeGrid');
 $("#DYN_PA_XXZL1").find("tr").css("display","");
 
}
if($("#selType2").is(":checked")){
 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(7)").show();
 $("#DYN_PA_CD_control").show();
 $('#DYN_PA_CD').jqGrid('resizeGrid');
 $("#DYN_PA_CD").find("tr").css("display","");


}
if($("#selType3").is(":checked")){
 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(8)").show();
 $("#DYN_PA_GB_control").show();
 $('#DYN_PA_GB').jqGrid('resizeGrid');
 $("#DYN_PA_GB").find("tr").css("display","");

 
}
if($("#selType4").is(":checked")){
 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(9)").show();
 $("#DYN_PA_SB_control").show();
 $('#DYN_PA_SB').jqGrid('resizeGrid');
 $("#DYN_PA_SB").find("tr").css("display","");

 
}
if($("#selType5").is(":checked")){
 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(10)").show();
 $("#DYN_PA_DHDQ_control").show();
 $('#DYN_PA_DHDQ').jqGrid('resizeGrid');
 $("#DYN_PA_DHDQ").find("tr").css("display","");

 
}
if($("#selType6").is(":checked")){
 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(11)").show();
 $("#DYN_PA_MPJJ_control").show();
 $('#DYN_PA_MPJJ').jqGrid('resizeGrid');
 $("#DYN_PA_MPJJ").find("tr").css("display","");

 
}
if($("#selType7").is(":checked")){
 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(12)").show();
 $("#DYN_PA_KNDY_control").show();
 $('#DYN_PA_KNDY').jqGrid('resizeGrid');
 $("#DYN_PA_KNDY").find("tr").css("display","");

 
}
if($("#selType8").is(":checked")){
 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(13)").show();
 $("#DYN_PA_BZ_control").show();
 $('#DYN_PA_BZ').jqGrid('resizeGrid');
 $("#DYN_PA_BZ").find("tr").css("display","");

 
}

 

}
};
 
}else{
 
 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody").find("tr").each(function(){
if(parseInt($(this).index()) >= 6){
 $(this).hide();
 
 }
});
 


}



$('#PARTY_MEMBER_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#PARTY_MEMBER_NUM').trigger('click');
});

$("#PARTY_MEMBER_NUM").on("keyup",function(){
    if($("#PARTY_MEMBER_NUM").val()>999999999999999){
        $("#PARTY_MEMBER_NUM").val(999999999999999);
        layer.msg("党员总人数最大值为\""+999999999999999+"\"");
    }
});


$('#TOTAL_PRICE').parent('[data-trigger="spinner"]').spinner();



$('#TOTAL_PRICE').blur(function()
{
    $('#TOTAL_PRICE').val(formatCurrency($('#TOTAL_PRICE').val(), 2));
});

$('#TOTAL_PRICE').val(formatCurrency($('#TOTAL_PRICE').val(), 2));



        $("#XXZL_TOTAL_PRICE").on("change",function(){
        TOTAL_PRICECalculateValue();
    });
        $("#CD_TOTAL_PRICE").on("change",function(){
        TOTAL_PRICECalculateValue();
    });
        $("#GB_TOTAL_PRICE").on("change",function(){
        TOTAL_PRICECalculateValue();
    });
        $("#SB_TOTAL_PRICE").on("change",function(){
        TOTAL_PRICECalculateValue();
    });
        $("#DHDQ_TOTAL_PRICE").on("change",function(){
        TOTAL_PRICECalculateValue();
    });
        $("#MPJJ_TOTAL_PRICE").on("change",function(){
        TOTAL_PRICECalculateValue();
    });
        $("#KNDY_TOTAL_PRICE").on("change",function(){
        TOTAL_PRICECalculateValue();
    });
        $("#BZ_TOTAL_PRICE").on("change",function(){
        TOTAL_PRICECalculateValue();
    });
    
$(".number-box-act").find("a").click(function(event){
setTimeout(function () {
        $("#XXZL_TOTAL_PRICE").trigger('click').trigger("change").trigger("blur");
        $("#CD_TOTAL_PRICE").trigger('click').trigger("change").trigger("blur");
        $("#GB_TOTAL_PRICE").trigger('click').trigger("change").trigger("blur");
        $("#SB_TOTAL_PRICE").trigger('click').trigger("change").trigger("blur");
        $("#DHDQ_TOTAL_PRICE").trigger('click').trigger("change").trigger("blur");
        $("#MPJJ_TOTAL_PRICE").trigger('click').trigger("change").trigger("blur");
        $("#KNDY_TOTAL_PRICE").trigger('click').trigger("change").trigger("blur");
        $("#BZ_TOTAL_PRICE").trigger('click').trigger("change").trigger("blur");
    },100);
});

$('#TOTAL_PRICE').next().find("a").unbind("click");

    function TOTAL_PRICECalculateValue(){
                var reg=/,/g;
        var num = $("#XXZL_TOTAL_PRICE").val().replace(reg,"");
        var XXZL_TOTAL_PRICE = Number(num);
                var reg=/,/g;
        var num = $("#CD_TOTAL_PRICE").val().replace(reg,"");
        var CD_TOTAL_PRICE = Number(num);
                var reg=/,/g;
        var num = $("#GB_TOTAL_PRICE").val().replace(reg,"");
        var GB_TOTAL_PRICE = Number(num);
                var reg=/,/g;
        var num = $("#SB_TOTAL_PRICE").val().replace(reg,"");
        var SB_TOTAL_PRICE = Number(num);
                var reg=/,/g;
        var num = $("#DHDQ_TOTAL_PRICE").val().replace(reg,"");
        var DHDQ_TOTAL_PRICE = Number(num);
                var reg=/,/g;
        var num = $("#MPJJ_TOTAL_PRICE").val().replace(reg,"");
        var MPJJ_TOTAL_PRICE = Number(num);
                var reg=/,/g;
        var num = $("#KNDY_TOTAL_PRICE").val().replace(reg,"");
        var KNDY_TOTAL_PRICE = Number(num);
                var reg=/,/g;
        var num = $("#BZ_TOTAL_PRICE").val().replace(reg,"");
        var BZ_TOTAL_PRICE = Number(num);
                var calculateValue = XXZL_TOTAL_PRICE+CD_TOTAL_PRICE+GB_TOTAL_PRICE+SB_TOTAL_PRICE+DHDQ_TOTAL_PRICE+MPJJ_TOTAL_PRICE+KNDY_TOTAL_PRICE+BZ_TOTAL_PRICE;
        if (isNaN(calculateValue)){
            return false;
        }
        if(calculateValue<0){
            calculateValue = 0;
        }
        if(calculateValue>999999999999999999.99){
            calculateValue = 999999999999999999.99;
            layer.msg("总计金额最大值为\""+999999999999999999.99+"\"");
        }

        $('#TOTAL_PRICE').val(calculateValue).trigger("change").trigger("blur");
    }

if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["TOTAL_PRICE"] = $('#TOTAL_PRICE').val().replace(reg,"");
    });
}

attachBpmId =   null  ;

var fileformValue = id;

setTimeout(function(){
    $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').find("[name='fileSecretLevel']").each(function(i,e){
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
    if (tagId != "eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G"){
        return;
    }

    if (required){
        $("#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G").attr("required","required");
   }else{
        $("#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G").removeAttr("required");
        $("#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G").attr("required");
    var bpmRequire = $("#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G"){
        return;
    }
    if(operability){
        $("#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G").show();
    }else{
        $("#eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G").hide();
    }
});


//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "selType"){
        return true;
    }
    if(operability){
                        var $tag = $('#selType1');
            $tag.removeAttr("disabled");
                                var $tag = $('#selType2');
            $tag.removeAttr("disabled");
                                var $tag = $('#selType3');
            $tag.removeAttr("disabled");
                                var $tag = $('#selType4');
            $tag.removeAttr("disabled");
                                var $tag = $('#selType5');
            $tag.removeAttr("disabled");
                                var $tag = $('#selType6');
            $tag.removeAttr("disabled");
                                var $tag = $('#selType7');
            $tag.removeAttr("disabled");
                                var $tag = $('#selType8');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "selType"){
        return;
    }

    if(operability){
        $("#selType").show();
    }else{
        $("#selType").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "selType"){
        return;
    }

    if (required){
        $('input[name="selType"]').attr("required","required");
    }else{
        $('input[name="selType"]').removeAttr("required","required");
    }
});
            $('input[name="SEL_TYPE"]').on('click',function(e){
            var i = parseInt($(this).val()) + 5;
var str = "#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq("+i+")";
if($(this).is(':checked')){

 $(str).show();

 switch(parseInt($(this).val())){
 case 1: //学习资料1

$("#DYN_PA_XXZL1_control").show();
 $('#DYN_PA_XXZL1').jqGrid('resizeGrid');
 break;
 case 2: //场地费2
 $("#DYN_PA_CD_control").show();
 $('#DYN_PA_CD').jqGrid('resizeGrid');
 break;
 case 3: //工本费3
 $("#DYN_PA_GB_control").show();
 $('#DYN_PA_GB').jqGrid('resizeGrid');
 break;
 case 4: //设备费用4
 $("#DYN_PA_SB_control").show();
 $('#DYN_PA_SB').jqGrid('resizeGrid');
 break;
 case 5: //党徽、党旗5
 $("#DYN_PA_DHDQ_control").show();
 $('#DYN_PA_DHDQ').jqGrid('resizeGrid');
 break;
 case 6: //门票/讲解6
 $("#DYN_PA_MPJJ_control").show();
 $('#DYN_PA_MPJJ').jqGrid('resizeGrid');
 break;
 case 7: //困难党员7
 $("#DYN_PA_KNDY_control").show();
 $('#DYN_PA_KNDY').jqGrid('resizeGrid');
 break;
 case 8: //表彰8
 $("#DYN_PA_BZ_control").show();
 $('#DYN_PA_BZ').jqGrid('resizeGrid');
 break;

 }
 

 
}else{

 $(str).hide();
switch(parseInt($(this).val())){
 case 1: //学习资料1


 $('#DYN_PA_XXZL').jqGrid('clearGridData');
 break;
 case 2: //场地费2

 $('#DYN_PA_CD').jqGrid('clearGridData');
 break;
 case 3: //工本费3

 $('#DYN_PA_GB').jqGrid('clearGridData');
 break;
 case 4: //设备费用4

 $('#DYN_PA_SB').jqGrid('clearGridData');
 break;
 case 5: //党徽、党旗5

 $('#DYN_PA_DHDQ').jqGrid('clearGridData');
 break;
 case 6: //门票/讲解6

 $('#DYN_PA_MPJJ').jqGrid('clearGridData');
 break;
 case 7: //困难党员7

 $('#DYN_PA_KNDY').jqGrid('clearGridData');
 break;
 case 8: //表彰8

 $('#DYN_PA_BZ').jqGrid('clearGridData');
 break;

 }
 
}


        });
            /*console.log($("#selType").val());

//$(":checkbox").prop("checked",true);
var i = parseInt($(this).val()) + 5;
var str = "#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq("+i+")";
if($(this).is(':checked')){
 

 $(str).show();
 //$("#DYN_PA_XXZL1").trigger('reloadGrid');

}else{

 $(str).hide();
}*/






var DYN_PA_XXZL1TabInitFlag = false;

					
var dataGridColModel_DYN_PA_XXZL1 =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'XXZL1_NAME', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'数量', name:'XXZL1_NUM', width:20,
		            editable : true,
		                  align:'left',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					  XXZL1_TOTAL_PRICECalculate(e,'XXZL1_NUM');
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'XXZL1_UNION_PRICE', width:20,
		            editable : true,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  			  XXZL1_TOTAL_PRICECalculate(e,'XXZL1_UNION_PRICE');
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【单价】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'XXZL1_TOTAL_PRICE', width:20,
		            editable : true,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【金额】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  			  DYN_PA_XXZL1UpdateColData(this.value,'XXZL1_TOTAL_PRICE')
		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_PA_XXZL1 = '{}';


DYN_PA_XXZL1UpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                if (typeof colname=="undefined" || colname == "" || colname === "XXZL1_NUM" ){
				                }
                if (typeof colname=="undefined" || colname == "" || colname === "XXZL1_UNION_PRICE" ){
				                }
                if (typeof colname=="undefined" || colname == "" || colname === "XXZL1_TOTAL_PRICE" ){
				                if($('#XXZL_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_XXZL1').jqGrid('getCol','XXZL1_TOTAL_PRICE',false,'sum') + value;
        	sum = sum? sum :0;
			if(sum >= $('#XXZL_TOTAL_PRICE').attr('data-min') && sum <= $('#XXZL_TOTAL_PRICE').attr('data-max')){
				$('#XXZL_TOTAL_PRICE').val(sum.toFixed(parseInt($('#XXZL_TOTAL_PRICE').attr('data-precision')))).trigger("change");
			}else{
				layer.msg('子表列【金额】的总和值超出【'+$('#XXZL_TOTAL_PRICE').attr('title')+'】的有效值范围');
			}
        }else{
        layer.msg('回填元素[XXZL_TOTAL_PRICE]不存在，请检查配置是否正确。');
        }
                }
        };

if (window.DYN_PA_XXZL1_comid == null || window.DYN_PA_XXZL1_comid == undefined || window.DYN_PA_XXZL1_comid == '') {
	window.DYN_PA_XXZL1_comid = id;
}

$('#DYN_PA_XXZL1').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_XXZL1',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_PA_XXZL1_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_PA_XXZL1,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_PA_XXZL1norecords").hide();//隐藏提示信息
    $("#DYN_PA_XXZL1Pager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_PA_XXZL1').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_PA_XXZL1norecords").html() == null) {
            $('#DYN_PA_XXZL1').parent().append("<div class='no_data' style='display: none' id='DYN_PA_XXZL1norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_PA_XXZL1').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_PA_XXZL1norecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_PA_XXZL1norecords img").css("width","120px");
        }else{
            $("#DYN_PA_XXZL1norecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_PA_XXZL1norecords").show();//显示提示信息
        $("#DYN_PA_XXZL1Pager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_PA_XXZL1').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_PA_XXZL1norecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_PA_XXZL1norecords img").css("width","120px");
	}else{
		$("#DYN_PA_XXZL1norecords img").css("width",(height/1.9)+"px");
	}
															DYN_PA_XXZL1UpdateColData();
			},


beforeEditCell:function(){
	$(".datatable").not("#DYN_PA_XXZL1").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_PA_XXZL1Reload = function(){
	var _isInvalid = true;
	$("#DYN_PA_XXZL1").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_PA_XXZL1TabInitFlag = true;
	$('#DYN_PA_XXZL1').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_PA_XXZL1TabReload = function(forceFlag){
	if(!DYN_PA_XXZL1TabInitFlag  || forceFlag){
		DYN_PA_XXZL1Reload();
	}

}



//放入表格toolbar中
$('#t_DYN_PA_XXZL1').append($('#DYN_PA_XXZL1Toolbar'));

    
    
    
    
    


    	function XXZL1_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PA_XXZL1').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PA_XXZL1').jqGrid("getRowData", rowid);
									var XXZL1_NUM = Number(rowdata["XXZL1_NUM"]);
			
									var XXZL1_UNION_PRICE = Number(rowdata["XXZL1_UNION_PRICE"]);
			
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = XXZL1_NUM*XXZL1_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PA_XXZL1').jqGrid("setCell",rowid,"XXZL1_TOTAL_PRICE",calculateValue);
		DYN_PA_XXZL1UpdateColData(0,'XXZL1_TOTAL_PRICE');
	}
	                
DYN_PA_XXZL1Reload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_XXZL1 = 0;
var newRowStart_DYN_PA_XXZL1 = "new_row";


/**
 * 添加页面
 */
insertTableDYN_PA_XXZL1 = function(){
	$('#DYN_PA_XXZL1').jqGrid('endEditCell');
	$("#DYN_PA_XXZL1norecords").hide();//隐藏提示信息
	$("#DYN_PA_XXZL1Pager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_PA_XXZL1 + newRowIndex_DYN_PA_XXZL1;
	var parameters = {
		rowID : newRowId,
		initdata : {
																												},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_PA_XXZL1').jqGrid('addRow', parameters);
	newRowIndex_DYN_PA_XXZL1++;  
};



/**
 * 删除
 */
deleteTableDYN_PA_XXZL1 = function(){
	var rows = [];
	rows = $('#DYN_PA_XXZL1').jqGrid('getGridParam','selarrrow');


	$('#DYN_PA_XXZL1').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_PA_XXZL1').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_PA_XXZL1',
					data: {ids : ids.join(','),formInfoId:'402811817f19a849017f1f1222c41c07',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_PA_XXZL1').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_PA_XXZL1').setGridWidth(700);
$('#DYN_PA_XXZL1').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_PA_XXZL1_insertBtn').bind('click',function(){
	insertTableDYN_PA_XXZL1();
});

//按钮绑定事件
$('#DYN_PA_XXZL1_deleteBtn').bind('click',function(){
	deleteTableDYN_PA_XXZL1();
});

//自定义按钮绑定事件
																//列onchange事件
					

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_XXZL1_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_PA_XXZL1_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_PA_XXZL1_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_PA_XXZL1_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_PA_XXZL1_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_XXZL1_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_XXZL1_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_PA_XXZL1_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_XXZL1_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_XXZL1_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_PA_XXZL1_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_PA_XXZL1_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_PA_XXZL1').validateJqGrid("validate");
});

		$('#DYN_PA_XXZL1').validateJqGrid("addValidate","XXZL1_NAME","maxlength",{maxlength:255});
				$('#DYN_PA_XXZL1').validateJqGrid("addValidate","XXZL1_NUM","maxlength",{maxlength:20});
				$('#DYN_PA_XXZL1').validateJqGrid("addValidate","XXZL1_UNION_PRICE","maxlength",{maxlength:20});
				$('#DYN_PA_XXZL1').validateJqGrid("addValidate","XXZL1_TOTAL_PRICE","maxlength",{maxlength:20});
				$('#DYN_PA_XXZL1').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		


$('#XXZL_TOTAL_PRICE').parent('[data-trigger="spinner"]').spinner();



$('#XXZL_TOTAL_PRICE').blur(function()
{
    $('#XXZL_TOTAL_PRICE').val(formatCurrency($('#XXZL_TOTAL_PRICE').val(), 2));
});

$('#XXZL_TOTAL_PRICE').val(formatCurrency($('#XXZL_TOTAL_PRICE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["XXZL_TOTAL_PRICE"] = $('#XXZL_TOTAL_PRICE').val().replace(reg,"");
    });
}



var DYN_PA_CDTabInitFlag = false;

				
var dataGridColModel_DYN_PA_CD =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'地点', name: 'CD_PLACE', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'活动名称', name: 'CD_ACTIVITY_NAME', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'金额', name:'CD_TOTAL_PRICE', width:20,
		            editable : true,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【金额】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  			  DYN_PA_CDUpdateColData(this.value,'CD_TOTAL_PRICE')
		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_PA_CD = '{}';


DYN_PA_CDUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                    if (typeof colname=="undefined" || colname == "" || colname === "CD_TOTAL_PRICE" ){
				                if($('#CD_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_CD').jqGrid('getCol','CD_TOTAL_PRICE',false,'sum') + value;
        	sum = sum? sum :0;
			if(sum >= $('#CD_TOTAL_PRICE').attr('data-min') && sum <= $('#CD_TOTAL_PRICE').attr('data-max')){
				$('#CD_TOTAL_PRICE').val(sum.toFixed(parseInt($('#CD_TOTAL_PRICE').attr('data-precision')))).trigger("change");
			}else{
				layer.msg('子表列【金额】的总和值超出【'+$('#CD_TOTAL_PRICE').attr('title')+'】的有效值范围');
			}
        }else{
        layer.msg('回填元素[CD_TOTAL_PRICE]不存在，请检查配置是否正确。');
        }
                }
        };

if (window.DYN_PA_CD_comid == null || window.DYN_PA_CD_comid == undefined || window.DYN_PA_CD_comid == '') {
	window.DYN_PA_CD_comid = id;
}

$('#DYN_PA_CD').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_CD',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_PA_CD_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_PA_CD,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_PA_CDnorecords").hide();//隐藏提示信息
    $("#DYN_PA_CDPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_PA_CD').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_PA_CDnorecords").html() == null) {
            $('#DYN_PA_CD').parent().append("<div class='no_data' style='display: none' id='DYN_PA_CDnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_PA_CD').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_PA_CDnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_PA_CDnorecords img").css("width","120px");
        }else{
            $("#DYN_PA_CDnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_PA_CDnorecords").show();//显示提示信息
        $("#DYN_PA_CDPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_PA_CD').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_PA_CDnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_PA_CDnorecords img").css("width","120px");
	}else{
		$("#DYN_PA_CDnorecords img").css("width",(height/1.9)+"px");
	}
								DYN_PA_CDUpdateColData();
			},


beforeEditCell:function(){
	$(".datatable").not("#DYN_PA_CD").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_PA_CDReload = function(){
	var _isInvalid = true;
	$("#DYN_PA_CD").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_PA_CDTabInitFlag = true;
	$('#DYN_PA_CD').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_PA_CDTabReload = function(forceFlag){
	if(!DYN_PA_CDTabInitFlag  || forceFlag){
		DYN_PA_CDReload();
	}

}



//放入表格toolbar中
$('#t_DYN_PA_CD').append($('#DYN_PA_CDToolbar'));

    
    
    
    


                
DYN_PA_CDReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_CD = 0;
var newRowStart_DYN_PA_CD = "new_row";


/**
 * 添加页面
 */
insertTableDYN_PA_CD = function(){
	$('#DYN_PA_CD').jqGrid('endEditCell');
	$("#DYN_PA_CDnorecords").hide();//隐藏提示信息
	$("#DYN_PA_CDPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_PA_CD + newRowIndex_DYN_PA_CD;
	var parameters = {
		rowID : newRowId,
		initdata : {
																							},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_PA_CD').jqGrid('addRow', parameters);
	newRowIndex_DYN_PA_CD++;  
};



/**
 * 删除
 */
deleteTableDYN_PA_CD = function(){
	var rows = [];
	rows = $('#DYN_PA_CD').jqGrid('getGridParam','selarrrow');


	$('#DYN_PA_CD').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_PA_CD').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_PA_CD',
					data: {ids : ids.join(','),formInfoId:'402811817f19a849017f1f1222c41c07',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_PA_CD').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_PA_CD').setGridWidth(700);
$('#DYN_PA_CD').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_PA_CD_insertBtn').bind('click',function(){
	insertTableDYN_PA_CD();
});

//按钮绑定事件
$('#DYN_PA_CD_deleteBtn').bind('click',function(){
	deleteTableDYN_PA_CD();
});

//自定义按钮绑定事件
																//列onchange事件
				

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_CD_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_PA_CD_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_PA_CD_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_PA_CD_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_PA_CD_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_CD_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_CD_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_PA_CD_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_CD_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_CD_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_PA_CD_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_PA_CD_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_PA_CD').validateJqGrid("validate");
});

$('#DYN_PA_CD').validateJqGrid("addValidate","CD_PLACE","required");
		$('#DYN_PA_CD').validateJqGrid("addValidate","CD_PLACE","maxlength",{maxlength:255});
		$('#DYN_PA_CD').validateJqGrid("addValidate","CD_ACTIVITY_NAME","required");
		$('#DYN_PA_CD').validateJqGrid("addValidate","CD_ACTIVITY_NAME","maxlength",{maxlength:255});
		$('#DYN_PA_CD').validateJqGrid("addValidate","CD_TOTAL_PRICE","required");
		$('#DYN_PA_CD').validateJqGrid("addValidate","CD_TOTAL_PRICE","maxlength",{maxlength:20});
				$('#DYN_PA_CD').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		


$('#CD_TOTAL_PRICE').parent('[data-trigger="spinner"]').spinner();



$('#CD_TOTAL_PRICE').blur(function()
{
    $('#CD_TOTAL_PRICE').val(formatCurrency($('#CD_TOTAL_PRICE').val(), 2));
});

$('#CD_TOTAL_PRICE').val(formatCurrency($('#CD_TOTAL_PRICE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["CD_TOTAL_PRICE"] = $('#CD_TOTAL_PRICE').val().replace(reg,"");
    });
}



var DYN_PA_GBTabInitFlag = false;

					
var dataGridColModel_DYN_PA_GB =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'资料名称', name: 'GB_NAME', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'数量', name:'GB_NUMM', width:20,
		            editable : true,
		                  align:'left',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					  GB_TOTAL_PRICECalculate(e,'GB_NUMM');
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'GB_UNION_PRICE', width:20,
		            editable : true,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  			  GB_TOTAL_PRICECalculate(e,'GB_UNION_PRICE');
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【单价】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'GB_TOTAL_PRICE', width:20,
		            editable : false,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【金额】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  			  DYN_PA_GBUpdateColData(this.value,'GB_TOTAL_PRICE')
		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_PA_GB = '{}';


DYN_PA_GBUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                if (typeof colname=="undefined" || colname == "" || colname === "GB_NUMM" ){
				                }
                if (typeof colname=="undefined" || colname == "" || colname === "GB_UNION_PRICE" ){
				                }
                if (typeof colname=="undefined" || colname == "" || colname === "GB_TOTAL_PRICE" ){
				                if($('#GB_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_GB').jqGrid('getCol','GB_TOTAL_PRICE',false,'sum') + value;
        	sum = sum? sum :0;
			if(sum >= $('#GB_TOTAL_PRICE').attr('data-min') && sum <= $('#GB_TOTAL_PRICE').attr('data-max')){
				$('#GB_TOTAL_PRICE').val(sum.toFixed(parseInt($('#GB_TOTAL_PRICE').attr('data-precision')))).trigger("change");
			}else{
				layer.msg('子表列【金额】的总和值超出【'+$('#GB_TOTAL_PRICE').attr('title')+'】的有效值范围');
			}
        }else{
        layer.msg('回填元素[GB_TOTAL_PRICE]不存在，请检查配置是否正确。');
        }
                }
        };

if (window.DYN_PA_GB_comid == null || window.DYN_PA_GB_comid == undefined || window.DYN_PA_GB_comid == '') {
	window.DYN_PA_GB_comid = id;
}

$('#DYN_PA_GB').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_GB',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_PA_GB_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_PA_GB,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_PA_GBnorecords").hide();//隐藏提示信息
    $("#DYN_PA_GBPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_PA_GB').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_PA_GBnorecords").html() == null) {
            $('#DYN_PA_GB').parent().append("<div class='no_data' style='display: none' id='DYN_PA_GBnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_PA_GB').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_PA_GBnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_PA_GBnorecords img").css("width","120px");
        }else{
            $("#DYN_PA_GBnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_PA_GBnorecords").show();//显示提示信息
        $("#DYN_PA_GBPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_PA_GB').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_PA_GBnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_PA_GBnorecords img").css("width","120px");
	}else{
		$("#DYN_PA_GBnorecords img").css("width",(height/1.9)+"px");
	}
															DYN_PA_GBUpdateColData();
			},


beforeEditCell:function(){
	$(".datatable").not("#DYN_PA_GB").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_PA_GBReload = function(){
	var _isInvalid = true;
	$("#DYN_PA_GB").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_PA_GBTabInitFlag = true;
	$('#DYN_PA_GB').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_PA_GBTabReload = function(forceFlag){
	if(!DYN_PA_GBTabInitFlag  || forceFlag){
		DYN_PA_GBReload();
	}

}



//放入表格toolbar中
$('#t_DYN_PA_GB').append($('#DYN_PA_GBToolbar'));

    
    
    
    
    


                    	function GB_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PA_GB').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PA_GB').jqGrid("getRowData", rowid);
									var GB_NUMM = Number(rowdata["GB_NUMM"]);
			
									var GB_UNION_PRICE = Number(rowdata["GB_UNION_PRICE"]);
			
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = GB_NUMM*GB_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PA_GB').jqGrid("setCell",rowid,"GB_TOTAL_PRICE",calculateValue);
		DYN_PA_GBUpdateColData(0,'GB_TOTAL_PRICE');
	}
	
DYN_PA_GBReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_GB = 0;
var newRowStart_DYN_PA_GB = "new_row";


/**
 * 添加页面
 */
insertTableDYN_PA_GB = function(){
	$('#DYN_PA_GB').jqGrid('endEditCell');
	$("#DYN_PA_GBnorecords").hide();//隐藏提示信息
	$("#DYN_PA_GBPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_PA_GB + newRowIndex_DYN_PA_GB;
	var parameters = {
		rowID : newRowId,
		initdata : {
																												},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_PA_GB').jqGrid('addRow', parameters);
	newRowIndex_DYN_PA_GB++;  
};



/**
 * 删除
 */
deleteTableDYN_PA_GB = function(){
	var rows = [];
	rows = $('#DYN_PA_GB').jqGrid('getGridParam','selarrrow');


	$('#DYN_PA_GB').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_PA_GB').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_PA_GB',
					data: {ids : ids.join(','),formInfoId:'402811817f19a849017f1f1222c41c07',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_PA_GB').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_PA_GB').setGridWidth(700);
$('#DYN_PA_GB').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_PA_GB_insertBtn').bind('click',function(){
	insertTableDYN_PA_GB();
});

//按钮绑定事件
$('#DYN_PA_GB_deleteBtn').bind('click',function(){
	deleteTableDYN_PA_GB();
});

//自定义按钮绑定事件
																//列onchange事件
					

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_GB_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_PA_GB_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_PA_GB_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_PA_GB_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_PA_GB_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_GB_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_GB_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_PA_GB_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_GB_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_GB_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_PA_GB_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_PA_GB_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_PA_GB').validateJqGrid("validate");
});

$('#DYN_PA_GB').validateJqGrid("addValidate","GB_NAME","required");
		$('#DYN_PA_GB').validateJqGrid("addValidate","GB_NAME","maxlength",{maxlength:255});
				$('#DYN_PA_GB').validateJqGrid("addValidate","GB_NUMM","maxlength",{maxlength:20});
		$('#DYN_PA_GB').validateJqGrid("addValidate","GB_UNION_PRICE","required");
		$('#DYN_PA_GB').validateJqGrid("addValidate","GB_UNION_PRICE","maxlength",{maxlength:20});
		$('#DYN_PA_GB').validateJqGrid("addValidate","GB_TOTAL_PRICE","required");
		$('#DYN_PA_GB').validateJqGrid("addValidate","GB_TOTAL_PRICE","maxlength",{maxlength:20});
				$('#DYN_PA_GB').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		


$('#GB_TOTAL_PRICE').parent('[data-trigger="spinner"]').spinner();



$('#GB_TOTAL_PRICE').blur(function()
{
    $('#GB_TOTAL_PRICE').val(formatCurrency($('#GB_TOTAL_PRICE').val(), 2));
});

$('#GB_TOTAL_PRICE').val(formatCurrency($('#GB_TOTAL_PRICE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["GB_TOTAL_PRICE"] = $('#GB_TOTAL_PRICE').val().replace(reg,"");
    });
}



var DYN_PA_SBTabInitFlag = false;

						
var dataGridColModel_DYN_PA_SB =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'SB_NAME', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'用途', name: 'SB_USE', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'数量', name:'SB_NUM', width:20,
		            editable : true,
		                  align:'left',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					  SB_TOTAL_PRICECalculate(e,'SB_NUM');
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										if (parseFloat(this.value) < parseFloat(0) ) {
							layer.msg('子表列【数量】的输入值必须大于等于0',{icon:0});
							this.value = 0;
						}
												  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'SB_UNION_PRICE', width:20,
		            editable : true,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  			  SB_TOTAL_PRICECalculate(e,'SB_UNION_PRICE');
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【单价】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'SB_TOTAL_PRICE', width:20,
		            editable : false,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【金额】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  			  DYN_PA_SBUpdateColData(this.value,'SB_TOTAL_PRICE')
		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_PA_SB = '{}';


DYN_PA_SBUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                    if (typeof colname=="undefined" || colname == "" || colname === "SB_NUM" ){
				                }
                if (typeof colname=="undefined" || colname == "" || colname === "SB_UNION_PRICE" ){
				                }
                if (typeof colname=="undefined" || colname == "" || colname === "SB_TOTAL_PRICE" ){
				                if($('#SB_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_SB').jqGrid('getCol','SB_TOTAL_PRICE',false,'sum') + value;
        	sum = sum? sum :0;
			if(sum >= $('#SB_TOTAL_PRICE').attr('data-min') && sum <= $('#SB_TOTAL_PRICE').attr('data-max')){
				$('#SB_TOTAL_PRICE').val(sum.toFixed(parseInt($('#SB_TOTAL_PRICE').attr('data-precision')))).trigger("change");
			}else{
				layer.msg('子表列【金额】的总和值超出【'+$('#SB_TOTAL_PRICE').attr('title')+'】的有效值范围');
			}
        }else{
        layer.msg('回填元素[SB_TOTAL_PRICE]不存在，请检查配置是否正确。');
        }
                }
        };

if (window.DYN_PA_SB_comid == null || window.DYN_PA_SB_comid == undefined || window.DYN_PA_SB_comid == '') {
	window.DYN_PA_SB_comid = id;
}

$('#DYN_PA_SB').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_SB',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_PA_SB_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_PA_SB,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_PA_SBnorecords").hide();//隐藏提示信息
    $("#DYN_PA_SBPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_PA_SB').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_PA_SBnorecords").html() == null) {
            $('#DYN_PA_SB').parent().append("<div class='no_data' style='display: none' id='DYN_PA_SBnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_PA_SB').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_PA_SBnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_PA_SBnorecords img").css("width","120px");
        }else{
            $("#DYN_PA_SBnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_PA_SBnorecords").show();//显示提示信息
        $("#DYN_PA_SBPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_PA_SB').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_PA_SBnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_PA_SBnorecords img").css("width","120px");
	}else{
		$("#DYN_PA_SBnorecords img").css("width",(height/1.9)+"px");
	}
																DYN_PA_SBUpdateColData();
			},


beforeEditCell:function(){
	$(".datatable").not("#DYN_PA_SB").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_PA_SBReload = function(){
	var _isInvalid = true;
	$("#DYN_PA_SB").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_PA_SBTabInitFlag = true;
	$('#DYN_PA_SB').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_PA_SBTabReload = function(forceFlag){
	if(!DYN_PA_SBTabInitFlag  || forceFlag){
		DYN_PA_SBReload();
	}

}



//放入表格toolbar中
$('#t_DYN_PA_SB').append($('#DYN_PA_SBToolbar'));

    
    
    
    
    
    


                    	function SB_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PA_SB').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PA_SB').jqGrid("getRowData", rowid);
									var SB_NUM = Number(rowdata["SB_NUM"]);
			
									var SB_UNION_PRICE = Number(rowdata["SB_UNION_PRICE"]);
			
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = SB_NUM*SB_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PA_SB').jqGrid("setCell",rowid,"SB_TOTAL_PRICE",calculateValue);
		DYN_PA_SBUpdateColData(0,'SB_TOTAL_PRICE');
	}
	    
DYN_PA_SBReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_SB = 0;
var newRowStart_DYN_PA_SB = "new_row";


/**
 * 添加页面
 */
insertTableDYN_PA_SB = function(){
	$('#DYN_PA_SB').jqGrid('endEditCell');
	$("#DYN_PA_SBnorecords").hide();//隐藏提示信息
	$("#DYN_PA_SBPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_PA_SB + newRowIndex_DYN_PA_SB;
	var parameters = {
		rowID : newRowId,
		initdata : {
																																	},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_PA_SB').jqGrid('addRow', parameters);
	newRowIndex_DYN_PA_SB++;  
};



/**
 * 删除
 */
deleteTableDYN_PA_SB = function(){
	var rows = [];
	rows = $('#DYN_PA_SB').jqGrid('getGridParam','selarrrow');


	$('#DYN_PA_SB').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_PA_SB').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_PA_SB',
					data: {ids : ids.join(','),formInfoId:'402811817f19a849017f1f1222c41c07',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_PA_SB').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_PA_SB').setGridWidth(700);
$('#DYN_PA_SB').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_PA_SB_insertBtn').bind('click',function(){
	insertTableDYN_PA_SB();
});

//按钮绑定事件
$('#DYN_PA_SB_deleteBtn').bind('click',function(){
	deleteTableDYN_PA_SB();
});

//自定义按钮绑定事件
																//列onchange事件
						

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_SB_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_PA_SB_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_PA_SB_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_PA_SB_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_PA_SB_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_SB_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_SB_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_PA_SB_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_SB_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_SB_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_PA_SB_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_PA_SB_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_PA_SB').validateJqGrid("validate");
});

$('#DYN_PA_SB').validateJqGrid("addValidate","SB_NAME","required");
		$('#DYN_PA_SB').validateJqGrid("addValidate","SB_NAME","maxlength",{maxlength:255});
		$('#DYN_PA_SB').validateJqGrid("addValidate","SB_USE","required");
		$('#DYN_PA_SB').validateJqGrid("addValidate","SB_USE","maxlength",{maxlength:255});
		$('#DYN_PA_SB').validateJqGrid("addValidate","SB_NUM","required");
		$('#DYN_PA_SB').validateJqGrid("addValidate","SB_NUM","maxlength",{maxlength:20});
		$('#DYN_PA_SB').validateJqGrid("addValidate","SB_UNION_PRICE","required");
		$('#DYN_PA_SB').validateJqGrid("addValidate","SB_UNION_PRICE","maxlength",{maxlength:20});
		$('#DYN_PA_SB').validateJqGrid("addValidate","SB_TOTAL_PRICE","required");
		$('#DYN_PA_SB').validateJqGrid("addValidate","SB_TOTAL_PRICE","maxlength",{maxlength:20});
				$('#DYN_PA_SB').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		


$('#SB_TOTAL_PRICE').parent('[data-trigger="spinner"]').spinner();



$('#SB_TOTAL_PRICE').blur(function()
{
    $('#SB_TOTAL_PRICE').val(formatCurrency($('#SB_TOTAL_PRICE').val(), 2));
});

$('#SB_TOTAL_PRICE').val(formatCurrency($('#SB_TOTAL_PRICE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["SB_TOTAL_PRICE"] = $('#SB_TOTAL_PRICE').val().replace(reg,"");
    });
}



var DYN_PA_DHDQTabInitFlag = false;

					
var dataGridColModel_DYN_PA_DHDQ =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'DHDQ_NAME', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'数量', name:'DHDQ_NUM', width:20,
		            editable : true,
		                  align:'left',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					  DHDQ_TOTAL_PRICECalculate(e,'DHDQ_NUM');
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'DHDQ_UNION_PRICE', width:20,
		            editable : true,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  			  DHDQ_TOTAL_PRICECalculate(e,'DHDQ_UNION_PRICE');
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【单价】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'DHDQ_TOTAL_PRICE', width:20,
		            editable : false,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【金额】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  			  DYN_PA_DHDQUpdateColData(this.value,'DHDQ_TOTAL_PRICE')
		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_PA_DHDQ = '{}';


DYN_PA_DHDQUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                if (typeof colname=="undefined" || colname == "" || colname === "DHDQ_NUM" ){
				                }
                if (typeof colname=="undefined" || colname == "" || colname === "DHDQ_UNION_PRICE" ){
				                }
                if (typeof colname=="undefined" || colname == "" || colname === "DHDQ_TOTAL_PRICE" ){
				                if($('#DHDQ_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_DHDQ').jqGrid('getCol','DHDQ_TOTAL_PRICE',false,'sum') + value;
        	sum = sum? sum :0;
			if(sum >= $('#DHDQ_TOTAL_PRICE').attr('data-min') && sum <= $('#DHDQ_TOTAL_PRICE').attr('data-max')){
				$('#DHDQ_TOTAL_PRICE').val(sum.toFixed(parseInt($('#DHDQ_TOTAL_PRICE').attr('data-precision')))).trigger("change");
			}else{
				layer.msg('子表列【金额】的总和值超出【'+$('#DHDQ_TOTAL_PRICE').attr('title')+'】的有效值范围');
			}
        }else{
        layer.msg('回填元素[DHDQ_TOTAL_PRICE]不存在，请检查配置是否正确。');
        }
                }
        };

if (window.DYN_PA_DHDQ_comid == null || window.DYN_PA_DHDQ_comid == undefined || window.DYN_PA_DHDQ_comid == '') {
	window.DYN_PA_DHDQ_comid = id;
}

$('#DYN_PA_DHDQ').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_DHDQ',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_PA_DHDQ_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_PA_DHDQ,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_PA_DHDQnorecords").hide();//隐藏提示信息
    $("#DYN_PA_DHDQPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_PA_DHDQ').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_PA_DHDQnorecords").html() == null) {
            $('#DYN_PA_DHDQ').parent().append("<div class='no_data' style='display: none' id='DYN_PA_DHDQnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_PA_DHDQ').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_PA_DHDQnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_PA_DHDQnorecords img").css("width","120px");
        }else{
            $("#DYN_PA_DHDQnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_PA_DHDQnorecords").show();//显示提示信息
        $("#DYN_PA_DHDQPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_PA_DHDQ').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_PA_DHDQnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_PA_DHDQnorecords img").css("width","120px");
	}else{
		$("#DYN_PA_DHDQnorecords img").css("width",(height/1.9)+"px");
	}
															DYN_PA_DHDQUpdateColData();
			},


beforeEditCell:function(){
	$(".datatable").not("#DYN_PA_DHDQ").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_PA_DHDQReload = function(){
	var _isInvalid = true;
	$("#DYN_PA_DHDQ").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_PA_DHDQTabInitFlag = true;
	$('#DYN_PA_DHDQ').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_PA_DHDQTabReload = function(forceFlag){
	if(!DYN_PA_DHDQTabInitFlag  || forceFlag){
		DYN_PA_DHDQReload();
	}

}



//放入表格toolbar中
$('#t_DYN_PA_DHDQ').append($('#DYN_PA_DHDQToolbar'));

    
    
    
    
    


                	function DHDQ_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PA_DHDQ').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PA_DHDQ').jqGrid("getRowData", rowid);
									var DHDQ_NUM = Number(rowdata["DHDQ_NUM"]);
			
									var DHDQ_UNION_PRICE = Number(rowdata["DHDQ_UNION_PRICE"]);
			
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = DHDQ_NUM*DHDQ_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PA_DHDQ').jqGrid("setCell",rowid,"DHDQ_TOTAL_PRICE",calculateValue);
		DYN_PA_DHDQUpdateColData(0,'DHDQ_TOTAL_PRICE');
	}
	    
DYN_PA_DHDQReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_DHDQ = 0;
var newRowStart_DYN_PA_DHDQ = "new_row";


/**
 * 添加页面
 */
insertTableDYN_PA_DHDQ = function(){
	$('#DYN_PA_DHDQ').jqGrid('endEditCell');
	$("#DYN_PA_DHDQnorecords").hide();//隐藏提示信息
	$("#DYN_PA_DHDQPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_PA_DHDQ + newRowIndex_DYN_PA_DHDQ;
	var parameters = {
		rowID : newRowId,
		initdata : {
																												},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_PA_DHDQ').jqGrid('addRow', parameters);
	newRowIndex_DYN_PA_DHDQ++;  
};



/**
 * 删除
 */
deleteTableDYN_PA_DHDQ = function(){
	var rows = [];
	rows = $('#DYN_PA_DHDQ').jqGrid('getGridParam','selarrrow');


	$('#DYN_PA_DHDQ').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_PA_DHDQ').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_PA_DHDQ',
					data: {ids : ids.join(','),formInfoId:'402811817f19a849017f1f1222c41c07',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_PA_DHDQ').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_PA_DHDQ').setGridWidth(700);
$('#DYN_PA_DHDQ').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_PA_DHDQ_insertBtn').bind('click',function(){
	insertTableDYN_PA_DHDQ();
});

//按钮绑定事件
$('#DYN_PA_DHDQ_deleteBtn').bind('click',function(){
	deleteTableDYN_PA_DHDQ();
});

//自定义按钮绑定事件
																//列onchange事件
					

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_DHDQ_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_PA_DHDQ_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_PA_DHDQ_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_PA_DHDQ_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_PA_DHDQ_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_DHDQ_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_DHDQ_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_PA_DHDQ_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_DHDQ_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_DHDQ_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_PA_DHDQ_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_PA_DHDQ_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_PA_DHDQ').validateJqGrid("validate");
});

$('#DYN_PA_DHDQ').validateJqGrid("addValidate","DHDQ_NAME","required");
		$('#DYN_PA_DHDQ').validateJqGrid("addValidate","DHDQ_NAME","maxlength",{maxlength:255});
		$('#DYN_PA_DHDQ').validateJqGrid("addValidate","DHDQ_NUM","required");
		$('#DYN_PA_DHDQ').validateJqGrid("addValidate","DHDQ_NUM","maxlength",{maxlength:20});
		$('#DYN_PA_DHDQ').validateJqGrid("addValidate","DHDQ_UNION_PRICE","required");
		$('#DYN_PA_DHDQ').validateJqGrid("addValidate","DHDQ_UNION_PRICE","maxlength",{maxlength:20});
		$('#DYN_PA_DHDQ').validateJqGrid("addValidate","DHDQ_TOTAL_PRICE","required");
		$('#DYN_PA_DHDQ').validateJqGrid("addValidate","DHDQ_TOTAL_PRICE","maxlength",{maxlength:20});
				$('#DYN_PA_DHDQ').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		


$('#DHDQ_TOTAL_PRICE').parent('[data-trigger="spinner"]').spinner();



$('#DHDQ_TOTAL_PRICE').blur(function()
{
    $('#DHDQ_TOTAL_PRICE').val(formatCurrency($('#DHDQ_TOTAL_PRICE').val(), 2));
});

$('#DHDQ_TOTAL_PRICE').val(formatCurrency($('#DHDQ_TOTAL_PRICE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["DHDQ_TOTAL_PRICE"] = $('#DHDQ_TOTAL_PRICE').val().replace(reg,"");
    });
}



var DYN_PA_MPJJTabInitFlag = false;

			
var dataGridColModel_DYN_PA_MPJJ =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'地点', name: 'MPJJ_PLACE', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'金额', name:'MPJJ_TOTAL_PRICE', width:20,
		            editable : true,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【金额】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  			  DYN_PA_MPJJUpdateColData(this.value,'MPJJ_TOTAL_PRICE')
		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_PA_MPJJ = '{}';


DYN_PA_MPJJUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                if (typeof colname=="undefined" || colname == "" || colname === "MPJJ_TOTAL_PRICE" ){
				                if($('#MPJJ_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_MPJJ').jqGrid('getCol','MPJJ_TOTAL_PRICE',false,'sum') + value;
        	sum = sum? sum :0;
			if(sum >= $('#MPJJ_TOTAL_PRICE').attr('data-min') && sum <= $('#MPJJ_TOTAL_PRICE').attr('data-max')){
				$('#MPJJ_TOTAL_PRICE').val(sum.toFixed(parseInt($('#MPJJ_TOTAL_PRICE').attr('data-precision')))).trigger("change");
			}else{
				layer.msg('子表列【金额】的总和值超出【'+$('#MPJJ_TOTAL_PRICE').attr('title')+'】的有效值范围');
			}
        }else{
        layer.msg('回填元素[MPJJ_TOTAL_PRICE]不存在，请检查配置是否正确。');
        }
                }
        };

if (window.DYN_PA_MPJJ_comid == null || window.DYN_PA_MPJJ_comid == undefined || window.DYN_PA_MPJJ_comid == '') {
	window.DYN_PA_MPJJ_comid = id;
}

$('#DYN_PA_MPJJ').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_MPJJ',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_PA_MPJJ_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_PA_MPJJ,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_PA_MPJJnorecords").hide();//隐藏提示信息
    $("#DYN_PA_MPJJPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_PA_MPJJ').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_PA_MPJJnorecords").html() == null) {
            $('#DYN_PA_MPJJ').parent().append("<div class='no_data' style='display: none' id='DYN_PA_MPJJnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_PA_MPJJ').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_PA_MPJJnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_PA_MPJJnorecords img").css("width","120px");
        }else{
            $("#DYN_PA_MPJJnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_PA_MPJJnorecords").show();//显示提示信息
        $("#DYN_PA_MPJJPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_PA_MPJJ').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_PA_MPJJnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_PA_MPJJnorecords img").css("width","120px");
	}else{
		$("#DYN_PA_MPJJnorecords img").css("width",(height/1.9)+"px");
	}
							DYN_PA_MPJJUpdateColData();
			},


beforeEditCell:function(){
	$(".datatable").not("#DYN_PA_MPJJ").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_PA_MPJJReload = function(){
	var _isInvalid = true;
	$("#DYN_PA_MPJJ").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_PA_MPJJTabInitFlag = true;
	$('#DYN_PA_MPJJ').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_PA_MPJJTabReload = function(forceFlag){
	if(!DYN_PA_MPJJTabInitFlag  || forceFlag){
		DYN_PA_MPJJReload();
	}

}



//放入表格toolbar中
$('#t_DYN_PA_MPJJ').append($('#DYN_PA_MPJJToolbar'));

    
    
    


            
DYN_PA_MPJJReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_MPJJ = 0;
var newRowStart_DYN_PA_MPJJ = "new_row";


/**
 * 添加页面
 */
insertTableDYN_PA_MPJJ = function(){
	$('#DYN_PA_MPJJ').jqGrid('endEditCell');
	$("#DYN_PA_MPJJnorecords").hide();//隐藏提示信息
	$("#DYN_PA_MPJJPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_PA_MPJJ + newRowIndex_DYN_PA_MPJJ;
	var parameters = {
		rowID : newRowId,
		initdata : {
																		},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_PA_MPJJ').jqGrid('addRow', parameters);
	newRowIndex_DYN_PA_MPJJ++;  
};



/**
 * 删除
 */
deleteTableDYN_PA_MPJJ = function(){
	var rows = [];
	rows = $('#DYN_PA_MPJJ').jqGrid('getGridParam','selarrrow');


	$('#DYN_PA_MPJJ').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_PA_MPJJ').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_PA_MPJJ',
					data: {ids : ids.join(','),formInfoId:'402811817f19a849017f1f1222c41c07',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_PA_MPJJ').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_PA_MPJJ').setGridWidth(700);
$('#DYN_PA_MPJJ').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_PA_MPJJ_insertBtn').bind('click',function(){
	insertTableDYN_PA_MPJJ();
});

//按钮绑定事件
$('#DYN_PA_MPJJ_deleteBtn').bind('click',function(){
	deleteTableDYN_PA_MPJJ();
});

//自定义按钮绑定事件
																//列onchange事件
			

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_MPJJ_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_PA_MPJJ_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_PA_MPJJ_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_PA_MPJJ_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_PA_MPJJ_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_MPJJ_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_MPJJ_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_PA_MPJJ_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_MPJJ_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_MPJJ_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_PA_MPJJ_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_PA_MPJJ_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_PA_MPJJ').validateJqGrid("validate");
});

$('#DYN_PA_MPJJ').validateJqGrid("addValidate","MPJJ_PLACE","required");
		$('#DYN_PA_MPJJ').validateJqGrid("addValidate","MPJJ_PLACE","maxlength",{maxlength:255});
				$('#DYN_PA_MPJJ').validateJqGrid("addValidate","MPJJ_TOTAL_PRICE","maxlength",{maxlength:20});
				$('#DYN_PA_MPJJ').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		


$('#MPJJ_TOTAL_PRICE').parent('[data-trigger="spinner"]').spinner();



$('#MPJJ_TOTAL_PRICE').blur(function()
{
    $('#MPJJ_TOTAL_PRICE').val(formatCurrency($('#MPJJ_TOTAL_PRICE').val(), 2));
});

$('#MPJJ_TOTAL_PRICE').val(formatCurrency($('#MPJJ_TOTAL_PRICE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["MPJJ_TOTAL_PRICE"] = $('#MPJJ_TOTAL_PRICE').val().replace(reg,"");
    });
}



var DYN_PA_KNDYTabInitFlag = false;

			
var dataGridColModel_DYN_PA_KNDY =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'姓名', name: 'KNDY_NAME', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'金额', name:'KNDY_TOTAL_PRICE', width:20,
		            editable : false,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【金额】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  			  DYN_PA_KNDYUpdateColData(this.value,'KNDY_TOTAL_PRICE')
		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_PA_KNDY = '{}';


DYN_PA_KNDYUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                if (typeof colname=="undefined" || colname == "" || colname === "KNDY_TOTAL_PRICE" ){
				                if($('#KNDY_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_KNDY').jqGrid('getCol','KNDY_TOTAL_PRICE',false,'sum') + value;
        	sum = sum? sum :0;
			if(sum >= $('#KNDY_TOTAL_PRICE').attr('data-min') && sum <= $('#KNDY_TOTAL_PRICE').attr('data-max')){
				$('#KNDY_TOTAL_PRICE').val(sum.toFixed(parseInt($('#KNDY_TOTAL_PRICE').attr('data-precision')))).trigger("change");
			}else{
				layer.msg('子表列【金额】的总和值超出【'+$('#KNDY_TOTAL_PRICE').attr('title')+'】的有效值范围');
			}
        }else{
        layer.msg('回填元素[KNDY_TOTAL_PRICE]不存在，请检查配置是否正确。');
        }
                }
        };

if (window.DYN_PA_KNDY_comid == null || window.DYN_PA_KNDY_comid == undefined || window.DYN_PA_KNDY_comid == '') {
	window.DYN_PA_KNDY_comid = id;
}

$('#DYN_PA_KNDY').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_KNDY',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_PA_KNDY_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_PA_KNDY,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_PA_KNDYnorecords").hide();//隐藏提示信息
    $("#DYN_PA_KNDYPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_PA_KNDY').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_PA_KNDYnorecords").html() == null) {
            $('#DYN_PA_KNDY').parent().append("<div class='no_data' style='display: none' id='DYN_PA_KNDYnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_PA_KNDY').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_PA_KNDYnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_PA_KNDYnorecords img").css("width","120px");
        }else{
            $("#DYN_PA_KNDYnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_PA_KNDYnorecords").show();//显示提示信息
        $("#DYN_PA_KNDYPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_PA_KNDY').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_PA_KNDYnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_PA_KNDYnorecords img").css("width","120px");
	}else{
		$("#DYN_PA_KNDYnorecords img").css("width",(height/1.9)+"px");
	}
							DYN_PA_KNDYUpdateColData();
			},


beforeEditCell:function(){
	$(".datatable").not("#DYN_PA_KNDY").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_PA_KNDYReload = function(){
	var _isInvalid = true;
	$("#DYN_PA_KNDY").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_PA_KNDYTabInitFlag = true;
	$('#DYN_PA_KNDY').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_PA_KNDYTabReload = function(forceFlag){
	if(!DYN_PA_KNDYTabInitFlag  || forceFlag){
		DYN_PA_KNDYReload();
	}

}



//放入表格toolbar中
$('#t_DYN_PA_KNDY').append($('#DYN_PA_KNDYToolbar'));

    
    
    


            
DYN_PA_KNDYReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_KNDY = 0;
var newRowStart_DYN_PA_KNDY = "new_row";


/**
 * 添加页面
 */
insertTableDYN_PA_KNDY = function(){
	$('#DYN_PA_KNDY').jqGrid('endEditCell');
	$("#DYN_PA_KNDYnorecords").hide();//隐藏提示信息
	$("#DYN_PA_KNDYPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_PA_KNDY + newRowIndex_DYN_PA_KNDY;
	var parameters = {
		rowID : newRowId,
		initdata : {
																		},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_PA_KNDY').jqGrid('addRow', parameters);
	newRowIndex_DYN_PA_KNDY++;  
};



/**
 * 删除
 */
deleteTableDYN_PA_KNDY = function(){
	var rows = [];
	rows = $('#DYN_PA_KNDY').jqGrid('getGridParam','selarrrow');


	$('#DYN_PA_KNDY').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_PA_KNDY').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_PA_KNDY',
					data: {ids : ids.join(','),formInfoId:'402811817f19a849017f1f1222c41c07',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_PA_KNDY').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_PA_KNDY').setGridWidth(700);
$('#DYN_PA_KNDY').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_PA_KNDY_insertBtn').bind('click',function(){
	insertTableDYN_PA_KNDY();
});

//按钮绑定事件
$('#DYN_PA_KNDY_deleteBtn').bind('click',function(){
	deleteTableDYN_PA_KNDY();
});

//自定义按钮绑定事件
																//列onchange事件
			

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_KNDY_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_PA_KNDY_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_PA_KNDY_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_PA_KNDY_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_PA_KNDY_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_KNDY_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_KNDY_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_PA_KNDY_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_KNDY_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_KNDY_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_PA_KNDY_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_PA_KNDY_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_PA_KNDY').validateJqGrid("validate");
});

$('#DYN_PA_KNDY').validateJqGrid("addValidate","KNDY_NAME","required");
		$('#DYN_PA_KNDY').validateJqGrid("addValidate","KNDY_NAME","maxlength",{maxlength:255});
		$('#DYN_PA_KNDY').validateJqGrid("addValidate","KNDY_TOTAL_PRICE","required");
		$('#DYN_PA_KNDY').validateJqGrid("addValidate","KNDY_TOTAL_PRICE","maxlength",{maxlength:20});
				$('#DYN_PA_KNDY').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		


$('#KNDY_TOTAL_PRICE').parent('[data-trigger="spinner"]').spinner();



$('#KNDY_TOTAL_PRICE').blur(function()
{
    $('#KNDY_TOTAL_PRICE').val(formatCurrency($('#KNDY_TOTAL_PRICE').val(), 2));
});

$('#KNDY_TOTAL_PRICE').val(formatCurrency($('#KNDY_TOTAL_PRICE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["KNDY_TOTAL_PRICE"] = $('#KNDY_TOTAL_PRICE').val().replace(reg,"");
    });
}



var DYN_PA_BZTabInitFlag = false;

					
var dataGridColModel_DYN_PA_BZ =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'BZ_NAME', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'人数', name:'BZ_NUM', width:20,
		            editable : true,
		                  align:'left',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					  BZ_TOTAL_PRICECalculate(e,'BZ_NUM');
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'BZ_UNION_PRICE', width:20,
		            editable : true,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  			  BZ_TOTAL_PRICECalculate(e,'BZ_UNION_PRICE');
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【单价】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'BZ_TOTAL_PRICE', width:20,
		            editable : false,
		                  align:'left',
		  	  editrules:{number:true},
		  		  		  sortable:false,
		  	  editoptions:{dataEvents:[
	  {
	  type:'change',fn:function(e){
		  		  }
	  },
	  {
	  type:'keyup',fn:function(e){
		  		  if (parseFloat(this.value) < parseFloat(0) ) {
		  layer.msg('子表列【金额】的输入值必须大于等于0',{icon:0});
		  this.value = 0;
		  }
		  		  		  			  DYN_PA_BZUpdateColData(this.value,'BZ_TOTAL_PRICE')
		  	  }
	  },

	  ]},
		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: ",",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_PA_BZ = '{}';


DYN_PA_BZUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                if (typeof colname=="undefined" || colname == "" || colname === "BZ_NUM" ){
				                }
                if (typeof colname=="undefined" || colname == "" || colname === "BZ_UNION_PRICE" ){
				                }
                if (typeof colname=="undefined" || colname == "" || colname === "BZ_TOTAL_PRICE" ){
				                if($('#BZ_TOTAL_PRICE').length>0){
        	var sum = $('#DYN_PA_BZ').jqGrid('getCol','BZ_TOTAL_PRICE',false,'sum') + value;
        	sum = sum? sum :0;
			if(sum >= $('#BZ_TOTAL_PRICE').attr('data-min') && sum <= $('#BZ_TOTAL_PRICE').attr('data-max')){
				$('#BZ_TOTAL_PRICE').val(sum.toFixed(parseInt($('#BZ_TOTAL_PRICE').attr('data-precision')))).trigger("change");
			}else{
				layer.msg('子表列【金额】的总和值超出【'+$('#BZ_TOTAL_PRICE').attr('title')+'】的有效值范围');
			}
        }else{
        layer.msg('回填元素[BZ_TOTAL_PRICE]不存在，请检查配置是否正确。');
        }
                }
        };

if (window.DYN_PA_BZ_comid == null || window.DYN_PA_BZ_comid == undefined || window.DYN_PA_BZ_comid == '') {
	window.DYN_PA_BZ_comid = id;
}

$('#DYN_PA_BZ').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PA_BZ',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_PA_BZ_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f19a849017f1f1222c41c07",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_PA_BZ,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_PA_BZnorecords").hide();//隐藏提示信息
    $("#DYN_PA_BZPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_PA_BZ').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_PA_BZnorecords").html() == null) {
            $('#DYN_PA_BZ').parent().append("<div class='no_data' style='display: none' id='DYN_PA_BZnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_PA_BZ').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_PA_BZnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_PA_BZnorecords img").css("width","120px");
        }else{
            $("#DYN_PA_BZnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_PA_BZnorecords").show();//显示提示信息
        $("#DYN_PA_BZPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_PA_BZ').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_PA_BZnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_PA_BZnorecords img").css("width","120px");
	}else{
		$("#DYN_PA_BZnorecords img").css("width",(height/1.9)+"px");
	}
															DYN_PA_BZUpdateColData();
			},


beforeEditCell:function(){
	$(".datatable").not("#DYN_PA_BZ").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_PA_BZReload = function(){
	var _isInvalid = true;
	$("#DYN_PA_BZ").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_PA_BZTabInitFlag = true;
	$('#DYN_PA_BZ').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_PA_BZTabReload = function(forceFlag){
	if(!DYN_PA_BZTabInitFlag  || forceFlag){
		DYN_PA_BZReload();
	}

}



//放入表格toolbar中
$('#t_DYN_PA_BZ').append($('#DYN_PA_BZToolbar'));

    
    
    
    
    


    	function BZ_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PA_BZ').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PA_BZ').jqGrid("getRowData", rowid);
									var BZ_NUM = Number(rowdata["BZ_NUM"]);
			
									var BZ_UNION_PRICE = Number(rowdata["BZ_UNION_PRICE"]);
			
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = BZ_NUM*BZ_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PA_BZ').jqGrid("setCell",rowid,"BZ_TOTAL_PRICE",calculateValue);
		DYN_PA_BZUpdateColData(0,'BZ_TOTAL_PRICE');
	}
	                
DYN_PA_BZReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PA_BZ = 0;
var newRowStart_DYN_PA_BZ = "new_row";


/**
 * 添加页面
 */
insertTableDYN_PA_BZ = function(){
	$('#DYN_PA_BZ').jqGrid('endEditCell');
	$("#DYN_PA_BZnorecords").hide();//隐藏提示信息
	$("#DYN_PA_BZPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_PA_BZ + newRowIndex_DYN_PA_BZ;
	var parameters = {
		rowID : newRowId,
		initdata : {
																												},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_PA_BZ').jqGrid('addRow', parameters);
	newRowIndex_DYN_PA_BZ++;  
};



/**
 * 删除
 */
deleteTableDYN_PA_BZ = function(){
	var rows = [];
	rows = $('#DYN_PA_BZ').jqGrid('getGridParam','selarrrow');


	$('#DYN_PA_BZ').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_PA_BZ').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_PA_BZ',
					data: {ids : ids.join(','),formInfoId:'402811817f19a849017f1f1222c41c07',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_PA_BZ').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_PA_BZ').setGridWidth(700);
$('#DYN_PA_BZ').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_PA_BZ_insertBtn').bind('click',function(){
	insertTableDYN_PA_BZ();
});

//按钮绑定事件
$('#DYN_PA_BZ_deleteBtn').bind('click',function(){
	deleteTableDYN_PA_BZ();
});

//自定义按钮绑定事件
																//列onchange事件
					

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_BZ_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_PA_BZ_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_PA_BZ_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_PA_BZ_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_PA_BZ_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_BZ_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_BZ_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_PA_BZ_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_PA_BZ_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_PA_BZ_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_PA_BZ_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_PA_BZ_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_PA_BZ').validateJqGrid("validate");
});

$('#DYN_PA_BZ').validateJqGrid("addValidate","BZ_NAME","required");
		$('#DYN_PA_BZ').validateJqGrid("addValidate","BZ_NAME","maxlength",{maxlength:255});
		$('#DYN_PA_BZ').validateJqGrid("addValidate","BZ_NUM","required");
		$('#DYN_PA_BZ').validateJqGrid("addValidate","BZ_NUM","maxlength",{maxlength:20});
		$('#DYN_PA_BZ').validateJqGrid("addValidate","BZ_UNION_PRICE","required");
		$('#DYN_PA_BZ').validateJqGrid("addValidate","BZ_UNION_PRICE","maxlength",{maxlength:20});
		$('#DYN_PA_BZ').validateJqGrid("addValidate","BZ_TOTAL_PRICE","required");
		$('#DYN_PA_BZ').validateJqGrid("addValidate","BZ_TOTAL_PRICE","maxlength",{maxlength:20});
				$('#DYN_PA_BZ').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		


$('#BZ_TOTAL_PRICE').parent('[data-trigger="spinner"]').spinner();



$('#BZ_TOTAL_PRICE').blur(function()
{
    $('#BZ_TOTAL_PRICE').val(formatCurrency($('#BZ_TOTAL_PRICE').val(), 2));
});

$('#BZ_TOTAL_PRICE').val(formatCurrency($('#BZ_TOTAL_PRICE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["BZ_TOTAL_PRICE"] = $('#BZ_TOTAL_PRICE').val().replace(reg,"");
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
    	
var dyn_names = new Array("XXZL","CD","GB","SB","DHDQ","MPJJ","KNDY","BZ");
 var total_price = 0.00;
for(var i = 0;i < dyn_names.length;i++){
 var rows = $("#DYN_PA_" + dyn_names[i]).jqGrid('getRowData');
 for(var j = 0 ;j < rows.length ;j++){
   
   if(rows[j].XXZL_TOTAL_PRICE && rows[j].XXZL_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].XXZL_TOTAL_PRICE);

   }
   if(rows[j].CD_TOTAL_PRICE && rows[j].CD_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].CD_TOTAL_PRICE);

   }
   if(rows[j].GB_TOTAL_PRICE && rows[j].GB_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].GB_TOTAL_PRICE);

   }
   if(rows[j].SB_TOTAL_PRICE && rows[j].SB_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].SB_TOTAL_PRICE);

   }
   if(rows[j].DHDQ_TOTAL_PRICE && rows[j].DHDQ_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].DHDQ_TOTAL_PRICE);

   }
   if(rows[j].MPJJ_TOTAL_PRICE && rows[j].MPJJ_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].MPJJ_TOTAL_PRICE);

   }
   if(rows[j].KNDY_TOTAL_PRICE && rows[j].KNDY_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].KNDY_TOTAL_PRICE);

   }
   if(rows[j].BZ_TOTAL_PRICE && rows[j].BZ_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].BZ_TOTAL_PRICE);

   }
  
   
 }

}
  jsonData.TOTAL_PRICE = total_price + "";


    }
    else {
    	var dyn_names = new Array("XXZL","CD","GB","SB","DHDQ","MPJJ","KNDY","BZ");
 var total_price = 0.00;
for(var i = 0;i < dyn_names.length;i++){
 var rows = $("#DYN_PA_" + dyn_names[i]).jqGrid('getRowData');
 for(var j = 0 ;j < rows.length ;j++){
   
   if(rows[j].XXZL_TOTAL_PRICE && rows[j].XXZL_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].XXZL_TOTAL_PRICE);

   }
   if(rows[j].CD_TOTAL_PRICE && rows[j].CD_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].CD_TOTAL_PRICE);

   }
   if(rows[j].GB_TOTAL_PRICE && rows[j].GB_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].GB_TOTAL_PRICE);

   }
   if(rows[j].SB_TOTAL_PRICE && rows[j].SB_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].SB_TOTAL_PRICE);

   }
   if(rows[j].DHDQ_TOTAL_PRICE && rows[j].DHDQ_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].DHDQ_TOTAL_PRICE);

   }
   if(rows[j].MPJJ_TOTAL_PRICE && rows[j].MPJJ_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].MPJJ_TOTAL_PRICE);

   }
   if(rows[j].KNDY_TOTAL_PRICE && rows[j].KNDY_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].KNDY_TOTAL_PRICE);

   }
   if(rows[j].BZ_TOTAL_PRICE && rows[j].BZ_TOTAL_PRICE != ""){
     total_price += parseFloat(rows[j].BZ_TOTAL_PRICE);

   }
  
   
 }

}
  jsonData.TOTAL_PRICE = total_price + "";
$("#totalPrice").val(total_price);


    }

    var processDef = new FlowListEditorBySec("partyActivityMoney",JSON.stringify(jsonData));
    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    var saveFlag = beforeSaveEvent.changeData(jsonData);
    if(saveFlag){
        FlowListEditorBySec.prototype.doStart = function(pdId){
            var tableId = $('#tableId').val();
            var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=402811817f19a849017f1f1222c41c07&tableId='+tableId+'&defineId='+pdId+'&formcode=partyActivityMoney';
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
