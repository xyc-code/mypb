var attachBpmId;

$(function(){
	

if ($("input[name='REQUEST_USER']").val()==''||$("input[name='REQUEST_USER']").val()==null||$("input[name='REQUEST_USER']").val()==undefined ){
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
	$("#REQUEST_USER").val(macoValue);
}







$("#AUTO_CODE").attr("initvalue",$("input[name='AUTO_CODE']",window.pageParams.content||document).val());
if ($("input[name='AUTO_CODE']",window.pageParams.content||document).val()==''||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==null||$("input[name='AUTO_CODE']",window.pageParams.content||document).val()==undefined ){

window.AUTO_CODEautocode = new AutoCode('SHYK_CODE',"AUTO_CODE",false,"AUTO_CODE",undefined
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
						autoCode: "SHYK_CODE",
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
									autoCode: "SHYK_CODE",
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



$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "TF_MEET_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#MEET_TYPE').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["MEET_TYPE"] != null && pageParams.formData["MEET_TYPE"] != ''){    $('#MEET_TYPE').val(pageParams.formData["MEET_TYPE"]);}else if($('#MEET_TYPE').attr("initValue")!=undefined&&$.trim($('#MEET_TYPE').attr("initValue"))!=''){    $('#MEET_TYPE').val($('#MEET_TYPE').attr("initValue"));    pageParams.formData["MEET_TYPE"] = $('#MEET_TYPE').attr("initValue");}else{    }}});


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






            $('#MEET_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#MEET_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#MEET_DATE').datepicker('show');
			 $('#MEET_DATE').datepicker().trigger('click');
					
		});
        





	JOIN_ORGDetailCol = 'JOIN_ORG';
	

function JOIN_ORGClickFun(){
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
				this.setRowJOIN_ORG = function(mapping,rowData){
					

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

						if(JOIN_ORGDetailCol == mapVer.targetName){
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
                , "20","select t.party_name,t.id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' order by t.party_name ",'[{"label":"党支部","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"PARTY_NAME","targetName":"JOIN_ORG","targetNameName":"参会组织名称N","display":"党支部","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowJOIN_ORG,this.getParamsValue,'','ThreeSessionAndOneLession-JOIN_ORG',this.jsSuccess);


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



						if(JOIN_ORGDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#JOIN_ORG").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function JOIN_ORGDetail(id){
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


			$('#JOIN_ORG')
	.on(' focus',function(e){
	JOIN_ORGClickFun();
	this.blur();
});

/*
$('#JOIN_ORGButton').on('click',function(e){
	JOIN_ORGClickFun();
	this.blur();
});

$('#JOIN_ORGButton').click(function(event) {
   $('#JOIN_ORG').trigger('focus');
});*/






	JOIN_PEOPLE_NEWDetailCol = 'JOIN_PEOPLE_NEW';
	

function JOIN_PEOPLE_NEWClickFun(){
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
				this.setRowJOIN_PEOPLE_NEW = function(mapping,rowData){
					debugger;

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

						if(JOIN_PEOPLE_NEWDetailCol == mapVer.targetName){
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
                , "80","SELECT T.NAME,t.no,T.ID,T.PARTY_NAME FROM party_member_activist_org_view T ORDER BY T.PARTY_NAME",'[{"label":"姓名","width":"50","align":"center","orderBy":"0","name":"NAME"},{"label":"工号","width":"50","align":"center","orderBy":"1","name":"NO"},{"label":"所在党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"NAME","targetName":"JOIN_PEOPLE_NEW","targetNameName":"参会人员","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"NO","targetName":"","targetNameName":"","display":"工号","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"所在党支部","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowJOIN_PEOPLE_NEW,this.getParamsValue,'','ThreeSessionAndOneLession-JOIN_PEOPLE_NEW',this.jsSuccess);


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
								debugger;
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



						if(JOIN_PEOPLE_NEWDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#JOIN_PEOPLE_NEW").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function JOIN_PEOPLE_NEWDetail(id){
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


			$('#JOIN_PEOPLE_NEW')
	.on(' focus',function(e){
	JOIN_PEOPLE_NEWClickFun();
	this.blur();
});

/*
$('#JOIN_PEOPLE_NEWButton').on('click',function(e){
	JOIN_PEOPLE_NEWClickFun();
	this.blur();
});

$('#JOIN_PEOPLE_NEWButton').click(function(event) {
   $('#JOIN_PEOPLE_NEW').trigger('focus');
});*/




$("#MEET_OUTLINECount").html((4000 - $('#MEET_OUTLINE').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatMEET_OUTLINELength(text,maxLen){
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



//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "HOURS_RECORD_YN"){
        return true;
    }
    if(operability){
                        var $tag = $('#HOURS_RECORD_YN1');
            $tag.removeAttr("disabled");
                                var $tag = $('#HOURS_RECORD_YN2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "HOURS_RECORD_YN"){
        return;
    }

    if(operability){
        $("#HOURS_RECORD_YN").show();
    }else{
        $("#HOURS_RECORD_YN").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "HOURS_RECORD_YN"){
        return;
    }

    if (required){
        $('input[name="HOURS_RECORD_YN"]').attr("required","required");
    }else{
        $('input[name="HOURS_RECORD_YN"]').removeAttr("required","required");
    }
});
            $('input[name="HOURS_RECORD_YN"]').on('change',function(e){
            if($(this).val() == '0'){
 	$('#LEARN_HOURS').val('');
 	$('#LEARN_HOURS').attr("disabled","disabled");

 
 }
if($(this).val() == '1' ){
 	$('#LEARN_HOURS').val('');
 	$('#LEARN_HOURS').removeAttr("disabled");

 }		
        });
        



$('#LEARN_HOURS').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#LEARN_HOURS').trigger('click');
});

$("#LEARN_HOURS").on("keyup",function(){
    if($("#LEARN_HOURS").val()>99999999999999.9){
        $("#LEARN_HOURS").val(99999999999999.9);
        layer.msg("学时最大值为\""+99999999999999.9+"\"");
    }
});


$("#MEET_THEMECount").html((4000 - $('#MEET_THEME').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatMEET_THEMELength(text,maxLen){
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



$('#DUE_PEOPLE_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#DUE_PEOPLE_NUM').trigger('click');
});

$("#DUE_PEOPLE_NUM").on("keyup",function(){
    if($("#DUE_PEOPLE_NUM").val()>999999999999999){
        $("#DUE_PEOPLE_NUM").val(999999999999999);
        layer.msg("应到人数最大值为\""+999999999999999+"\"");
    }
});


$('#ACTUAL_PEOPLE_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#ACTUAL_PEOPLE_NUM').trigger('click');
});

$("#ACTUAL_PEOPLE_NUM").on("keyup",function(){
    if($("#ACTUAL_PEOPLE_NUM").val()>999999999999999){
        $("#ACTUAL_PEOPLE_NUM").val(999999999999999);
        layer.msg("实到人数最大值为\""+999999999999999+"\"");
    }
});
            $('#ACTUAL_PEOPLE_NUM').on('change',function(e){
            var duePeopleNum = parseInt($("#DUE_PEOPLE_NUM").val());

var actualPeopleNum = parseInt(this.value);
if(actualPeopleNum > duePeopleNum){
 
 layer.msg("实到人数应小于等于应到人数");
 this.value = "";
 
 return false;
 }

        });
        

$('#LEAVE_PEOPLE_NUM').parent('[data-trigger="spinner"]').spinner();


        $("#DUE_PEOPLE_NUM").on("change",function(){
        LEAVE_PEOPLE_NUMCalculateValue();
    });
        $("#ACTUAL_PEOPLE_NUM").on("change",function(){
        LEAVE_PEOPLE_NUMCalculateValue();
    });
    
    $(".number-box-act").find("a").click(function(event){
         setTimeout(function () {
                             $("#DUE_PEOPLE_NUM").trigger('click').trigger("change").trigger("blur");
                             $("#ACTUAL_PEOPLE_NUM").trigger('click').trigger("change").trigger("blur");
                      },100);
     });

    $('#LEAVE_PEOPLE_NUM').next().find("a").unbind("click");
    function LEAVE_PEOPLE_NUMCalculateValue(){
                var reg=/,/g;
        var num = $("#DUE_PEOPLE_NUM").val().replace(reg,"");
        var DUE_PEOPLE_NUM = Number(num);
                var reg=/,/g;
        var num = $("#ACTUAL_PEOPLE_NUM").val().replace(reg,"");
        var ACTUAL_PEOPLE_NUM = Number(num);
                var calculateValue = DUE_PEOPLE_NUM-ACTUAL_PEOPLE_NUM;
        if (isNaN(calculateValue)){
            return false;
        }
        if(calculateValue>999999999999999){
            calculateValue = 999999999999999;
            layer.msg("请假人数最大值为\""+999999999999999+"\"");
        }
        $('#LEAVE_PEOPLE_NUM').val(calculateValue).trigger("change").trigger("blur");
    }

$('.number-box-act').click(function(event) {
   $('#LEAVE_PEOPLE_NUM').trigger('click');
});

$("#LEAVE_PEOPLE_NUM").on("keyup",function(){
    if($("#LEAVE_PEOPLE_NUM").val()>999999999999999){
        $("#LEAVE_PEOPLE_NUM").val(999999999999999);
        layer.msg("请假人数最大值为\""+999999999999999+"\"");
    }
});


$('#JOIN_MEET_RATE').parent('[data-trigger="spinner"]').spinner();


        $("#ACTUAL_PEOPLE_NUM").on("change",function(){
        JOIN_MEET_RATECalculateValue();
    });
        $("#DUE_PEOPLE_NUM").on("change",function(){
        JOIN_MEET_RATECalculateValue();
    });
    
    $(".number-box-act").find("a").click(function(event){
         setTimeout(function () {
                             $("#ACTUAL_PEOPLE_NUM").trigger('click').trigger("change").trigger("blur");
                             $("#DUE_PEOPLE_NUM").trigger('click').trigger("change").trigger("blur");
                      },100);
     });

    $('#JOIN_MEET_RATE').next().find("a").unbind("click");
    function JOIN_MEET_RATECalculateValue(){
                var reg=/,/g;
        var num = $("#ACTUAL_PEOPLE_NUM").val().replace(reg,"");
        var ACTUAL_PEOPLE_NUM = Number(num);
                var reg=/,/g;
        var num = $("#DUE_PEOPLE_NUM").val().replace(reg,"");
        var DUE_PEOPLE_NUM = Number(num);
                var calculateValue = ACTUAL_PEOPLE_NUM/DUE_PEOPLE_NUM*100;
        if (isNaN(calculateValue)){
            return false;
        }
        if(calculateValue>9999999999999.99){
            calculateValue = 9999999999999.99;
            layer.msg("参会率最大值为\""+9999999999999.99+"\"");
        }
        $('#JOIN_MEET_RATE').val(calculateValue).trigger("change").trigger("blur");
    }

$('.number-box-act').click(function(event) {
   $('#JOIN_MEET_RATE').trigger('click');
});

$("#JOIN_MEET_RATE").on("keyup",function(){
    if($("#JOIN_MEET_RATE").val()>9999999999999.99){
        $("#JOIN_MEET_RATE").val(9999999999999.99);
        layer.msg("参会率最大值为\""+9999999999999.99+"\"");
    }
});
            $('#JOIN_MEET_RATE').on('change',function(e){
            

        });
        



	LEAVEL_PEOPLEDetailCol = 'LEAVEL_PEOPLE';
	

function LEAVEL_PEOPLEClickFun(){
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
				this.setRowLEAVEL_PEOPLE = function(mapping,rowData){
					

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

						if(LEAVEL_PEOPLEDetailCol == mapVer.targetName){
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
                , "20","SELECT T.NAME,T.ID,T.PARTY_NAME FROM party_member_activist_org_view T ORDER BY T.PARTY_NAME",'[{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"NAME","targetName":"LEAVEL_PEOPLE","targetNameName":"请假人员名单","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowLEAVEL_PEOPLE,this.getParamsValue,'','ThreeSessionAndOneLession-LEAVEL_PEOPLE',this.jsSuccess);


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



						if(LEAVEL_PEOPLEDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#LEAVEL_PEOPLE").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function LEAVEL_PEOPLEDetail(id){
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


			$('#LEAVEL_PEOPLE')
	.on(' focus',function(e){
	LEAVEL_PEOPLEClickFun();
	this.blur();
});

/*
$('#LEAVEL_PEOPLEButton').on('click',function(e){
	LEAVEL_PEOPLEClickFun();
	this.blur();
});

$('#LEAVEL_PEOPLEButton').click(function(event) {
   $('#LEAVEL_PEOPLE').trigger('focus');
});*/




//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "SPEAKER_OUT_YN"){
        return true;
    }
    if(operability){
                        var $tag = $('#SPEAKER_OUT_YN1');
            $tag.removeAttr("disabled");
                                var $tag = $('#SPEAKER_OUT_YN2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "SPEAKER_OUT_YN"){
        return;
    }

    if(operability){
        $("#SPEAKER_OUT_YN").show();
    }else{
        $("#SPEAKER_OUT_YN").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "SPEAKER_OUT_YN"){
        return;
    }

    if (required){
        $('input[name="SPEAKER_OUT_YN"]').attr("required","required");
    }else{
        $('input[name="SPEAKER_OUT_YN"]').removeAttr("required","required");
    }
});
            $('input[name="SPEAKER_OUT_YN"]').on('change',function(e){
            if($(this).val() == '0'){
 	$('#SPEAKER').val('');
	$('#SPEAKER').on('focus',function(e){
	SPEAKERClickFun();
	this.blur();
});

 
 }
if($(this).val() == '1' ){
 	$('#SPEAKER').val('');

	$('#SPEAKER').off('focus');
 this.blur();

 }		
        });
        



	SPEAKERDetailCol = 'SPEAKER';
	

function SPEAKERClickFun(){
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
				this.setRowSPEAKER = function(mapping,rowData){
					

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

						if(SPEAKERDetailCol == mapVer.targetName){
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
                , "20","SELECT T.NAME,T.ID,T.PARTY_NAME FROM party_member_activist_org_view T ORDER BY T.PARTY_NAME",'[{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"NAME","targetName":"SPEAKER","targetNameName":"主讲人","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowSPEAKER,this.getParamsValue,'','ThreeSessionAndOneLession-SPEAKER',this.jsSuccess);


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



						if(SPEAKERDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#SPEAKER").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function SPEAKERDetail(id){
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


			$('#SPEAKER')
	.on(' focus',function(e){
	SPEAKERClickFun();
	this.blur();
});

/*
$('#SPEAKERButton').on('click',function(e){
	SPEAKERClickFun();
	this.blur();
});

$('#SPEAKERButton').click(function(event) {
   $('#SPEAKER').trigger('focus');
});*/




//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "LECTURER_OUT_YN"){
        return true;
    }
    if(operability){
                        var $tag = $('#LECTURER_OUT_YN1');
            $tag.removeAttr("disabled");
                                var $tag = $('#LECTURER_OUT_YN2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "LECTURER_OUT_YN"){
        return;
    }

    if(operability){
        $("#LECTURER_OUT_YN").show();
    }else{
        $("#LECTURER_OUT_YN").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "LECTURER_OUT_YN"){
        return;
    }

    if (required){
        $('input[name="LECTURER_OUT_YN"]').attr("required","required");
    }else{
        $('input[name="LECTURER_OUT_YN"]').removeAttr("required","required");
    }
});
            $('input[name="LECTURER_OUT_YN"]').on('change',function(e){
            if($(this).val() == '0'){
 	$('#LECTURER').val('');
	$('#LECTURER').on('focus',function(e){
	LECTURERClickFun();
	this.blur();
});

 
 }
if($(this).val() == '1' ){
 	$('#LECTURER').val('');

	$('#LECTURER').off('focus');
 this.blur();

 }
        });
        



	LECTURERDetailCol = 'LECTURER';
	

function LECTURERClickFun(){
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
				this.setRowLECTURER = function(mapping,rowData){
					

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

						if(LECTURERDetailCol == mapVer.targetName){
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
                , "20","SELECT T.NAME,T.ID,T.PARTY_NAME FROM party_member_activist_org_view T ORDER BY T.PARTY_NAME",'[{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"NAME","targetName":"LECTURER","targetNameName":"授课人","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowLECTURER,this.getParamsValue,'','ThreeSessionAndOneLession-LECTURER',this.jsSuccess);


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



						if(LECTURERDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#LECTURER").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function LECTURERDetail(id){
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


			$('#LECTURER')
	.on(' focus',function(e){
	LECTURERClickFun();
	this.blur();
});

/*
$('#LECTURERButton').on('click',function(e){
	LECTURERClickFun();
	this.blur();
});

$('#LECTURERButton').click(function(event) {
   $('#LECTURER').trigger('focus');
});*/




//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "HOST_TAKER_OUT_YN"){
        return true;
    }
    if(operability){
                        var $tag = $('#HOST_TAKER_OUT_YN1');
            $tag.removeAttr("disabled");
                                var $tag = $('#HOST_TAKER_OUT_YN2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "HOST_TAKER_OUT_YN"){
        return;
    }

    if(operability){
        $("#HOST_TAKER_OUT_YN").show();
    }else{
        $("#HOST_TAKER_OUT_YN").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "HOST_TAKER_OUT_YN"){
        return;
    }

    if (required){
        $('input[name="HOST_TAKER_OUT_YN"]').attr("required","required");
    }else{
        $('input[name="HOST_TAKER_OUT_YN"]').removeAttr("required","required");
    }
});
            $('input[name="HOST_TAKER_OUT_YN"]').on('change',function(e){
            if($(this).val() == '0'){
 	$('#HOST_TAKER').val('');
	$('#HOST_TAKER').on('focus',function(e){
	HOST_TAKERClickFun();
	this.blur();
});

 
 }
if($(this).val() == '1' ){
 	$('#HOST_TAKER').val('');

	$('#HOST_TAKER').off('focus');
 this.blur();

 }
        });
        



	HOST_TAKERDetailCol = 'HOST_TAKER';
	

function HOST_TAKERClickFun(){
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
				this.setRowHOST_TAKER = function(mapping,rowData){
					

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

						if(HOST_TAKERDetailCol == mapVer.targetName){
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
                , "20","SELECT T.NAME,T.ID,T.PARTY_NAME FROM party_member_activist_org_view T ORDER BY T.PARTY_NAME",'[{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"NAME","targetName":"HOST_TAKER","targetNameName":"主持人","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowHOST_TAKER,this.getParamsValue,'','ThreeSessionAndOneLession-HOST_TAKER',this.jsSuccess);


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



						if(HOST_TAKERDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#HOST_TAKER").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function HOST_TAKERDetail(id){
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


			$('#HOST_TAKER')
	.on(' focus',function(e){
	HOST_TAKERClickFun();
	this.blur();
});

/*
$('#HOST_TAKERButton').on('click',function(e){
	HOST_TAKERClickFun();
	this.blur();
});

$('#HOST_TAKERButton').click(function(event) {
   $('#HOST_TAKER').trigger('focus');
});*/




//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "NOTE_TAKER_OUT_YN"){
        return true;
    }
    if(operability){
                        var $tag = $('#NOTE_TAKER_OUT_YN1');
            $tag.removeAttr("disabled");
                                var $tag = $('#NOTE_TAKER_OUT_YN2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "NOTE_TAKER_OUT_YN"){
        return;
    }

    if(operability){
        $("#NOTE_TAKER_OUT_YN").show();
    }else{
        $("#NOTE_TAKER_OUT_YN").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "NOTE_TAKER_OUT_YN"){
        return;
    }

    if (required){
        $('input[name="NOTE_TAKER_OUT_YN"]').attr("required","required");
    }else{
        $('input[name="NOTE_TAKER_OUT_YN"]').removeAttr("required","required");
    }
});
            $('input[name="NOTE_TAKER_OUT_YN"]').on('change',function(e){
            if($(this).val() == '0'){
 	$('#NOTE_TAKER').val('');
	$('#NOTE_TAKER').on('focus',function(e){
	NOTE_TAKERClickFun();
	this.blur();
});

 
 }
if($(this).val() == '1' ){
 	$('#NOTE_TAKER').val('');

	$('#NOTE_TAKER').off('focus');
 this.blur();

 }
        });
        



	NOTE_TAKERDetailCol = 'NOTE_TAKER';
	

function NOTE_TAKERClickFun(){
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
				this.setRowNOTE_TAKER = function(mapping,rowData){
					

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

						if(NOTE_TAKERDetailCol == mapVer.targetName){
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
                , "20","SELECT T.NAME,T.ID,T.PARTY_NAME FROM party_member_activist_org_view T ORDER BY T.PARTY_NAME",'[{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"NAME","targetName":"NOTE_TAKER","targetNameName":"记录人","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowNOTE_TAKER,this.getParamsValue,'','ThreeSessionAndOneLession-NOTE_TAKER',this.jsSuccess);


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



						if(NOTE_TAKERDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#NOTE_TAKER").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function NOTE_TAKERDetail(id){
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


			$('#NOTE_TAKER')
	.on(' focus',function(e){
	NOTE_TAKERClickFun();
	this.blur();
});

/*
$('#NOTE_TAKERButton').on('click',function(e){
	NOTE_TAKERClickFun();
	this.blur();
});

$('#NOTE_TAKERButton').click(function(event) {
   $('#NOTE_TAKER').trigger('focus');
});*/




$("#MEET_RESULTCount").html((4000 - $('#MEET_RESULT').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatMEET_RESULTLength(text,maxLen){
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



$("#REMARKSCount").html((4000 - $('#REMARKS').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatREMARKSLength(text,maxLen){
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


$('#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb').uploaderExt({
    eformUI: 'bootstrap',
    formId: fileformValue,
    tableName: '',
    secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
        afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: 'aAAqdPPuXNI12T97c7AiWs6idHRKhUSb',
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
    formSecret: 'SECRET_LEVEL',
    accept:
                    ''
        });

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    if (!$('#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb').uploaderExt('validateSecret')){return false;}
});

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "aAAqdPPuXNI12T97c7AiWs6idHRKhUSb"){
        return;
    }

    if (required){
        $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").attr("required","required");
   }else{
        $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").removeAttr("required");
        $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").attr("required");
    var bpmRequire = $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "aAAqdPPuXNI12T97c7AiWs6idHRKhUSb"){
        return;
    }
    if(operability){
        $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").show();
    }else{
        $("#aAAqdPPuXNI12T97c7AiWs6idHRKhUSb").hide();
    }
});
    
if(!pageParams.urlParam.id){
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
            var parentValue = $('#'+fkcol).val();
            if (parentValue=="" || parentValue == null || parentValue == undefined){
                $('#'+fkcol).val(fkvalue);
            }

     	}else{
     		$fk = $('<input type="hidden" name="'+fkcol+'" id="'+fkcol+'" value="'+fkvalue+'"/>');
     		$('#form').append($fk);
     	}
	}

	$('.date-picker').on('keydown',nullInput);
	$('.time-picker').on('keydown',nullInput);
	
		                 
    if(type === "tree" || type === "treeGrid") {
        $("#" + parentNodeId).attr("readonly", "readonly");

        if(pNodeIdValue != null && pNodeIdValue != "") {
            var parentValue =  $("#" + parentNodeId).val();
            if (parentValue=="" || parentValue == null || parentValue == undefined){
                $("#" + parentNodeId).val(pNodeIdValue);
            }
        }
    }

    $('.spinner input').trigger("blur.spinner");


    $(".eform-form-tab").each(function(){
        eformTabReload(this);
        setTabMenu(this);
    });

    if (formIsDirtyvalidateflag == "true"){
        var initsubTableData = {};
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
                initsubTableData[tableId] = data;
            }
        });

        $("#subTableData").val(JSON.stringify(initsubTableData));
        setTimeout(function(){
            var jsonData = serializeObjectForEform($('#form'),true);
            pageParams.originalData = jsonData;
        },1000)
    }
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

    if (isEmptyObject(jsonData)){
        if (formIsDirtyvalidateflag == "true"){
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

            var jsonDataEnds = serializeObjectForEform($('#form'),true);
            if (!isObjectValueEqual(pageParams.originalData,jsonDataEnds)){
                layer.confirm('表单数据未保存，确定要关闭吗？', {
                    icon: 3,
                    title: '提示',
                    area: ['400px', '']
                }, function(index) {
                    var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
                    parent.layer.close(index);
                });
            }else{
                var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
                parent.layer.close(index);
            }
        }else{
            var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
            parent.layer.close(index);
        }
    }else{

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
    }
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

    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
	var tableId = $('#tableId').val();
	var url = 'platform/eform/bpmsCRUDClient/edit?tableId='+tableId+'&id='+id+'&formInfoId='+formInfoId;
    var saveFlag = beforeSaveEvent.changeData(jsonData);
    if(saveFlag){
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

                    if(typeof(callback) == "function"){
                        callback(result.id,aftercallback,result);
                    }else{
                        var jsonData = serializeObjectForEform($('#form'));
                        if(typeof(aftercallback) == "function"){
                            aftercallback(jsonData);
                        }

                        closeDialog(jsonData);
                    }

                    if(isInsert) {
                        
                    }
                    else {
                        
                    }
                    afterSaveEvent.exec(jsonData,result);
                    isInsert = false;
                    //刷新子表数据
                    $('table.datatable').not(".eform-self-form").each(function(){
                        var tableId = $(this).attr("id");
                        $('#' + tableId).jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
                    });
                    $("#page_saveButton").removeClass("disabled");
                }else{
                    layer.alert(result.msg, {
                        icon: 7
                    });
                    $("#page_saveButton").removeClass("disabled");
                }
            }
        });
    }
};

//全局上传状态
var globalUploadNum = 0;
var globalUploadNumTemp = 0;
//上传附件
function callback(id,aftercallback, result) {
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
            $(element).uploaderExt('doUpload', id, domId);
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
            $("#page_saveButton").removeClass("disabled");
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
