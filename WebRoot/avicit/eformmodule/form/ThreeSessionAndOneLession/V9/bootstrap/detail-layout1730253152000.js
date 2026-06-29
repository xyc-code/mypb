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



    if(pageParams.urlParam.id == undefined){
var userId = pageParams.session.userId;
$.ajax({
 url:"avicit/pb/organize/partyOrganMember/partyOrganMemberTelController/getUser/"+userId,
 type:"POST",
 dataType:"JSON",
 success:function(e){
 if(e==null||e.rows.length==0){
 layer.msg('未获取到对应电话');
 }else{
 $("#REQUEST_TEL").val(e.rows[0].attribute10);
 }
 },
 error:function(e){
 layer.msg('网络异常，未找到对应接口,无法带入联系电话');
 }
});
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
                , "20","select t.party_name,t.id,t.attribute_01,(select party_name from party_organization where id = t.parent_id) as parentName from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' order by t.attribute_01 desc",'[{"label":"党组织类型","width":"50","align":"center","orderBy":"1","name":"ATTRIBUTE_01Name"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"},{"label":"上级党支部名称","width":"50","align":"center","orderBy":"3","name":"PARENTNAME"}]','[{"name":"ATTRIBUTE_01Name","targetName":"","targetNameName":"","display":"党组织类型","transform":"7","lookupType":"PARTY_ORG_TYPE","filter":false},{"name":"PARTY_NAME","targetName":"JOIN_ORG","targetNameName":"参会组织名称","display":"党支部","transform":"","lookupType":"","filter":true},{"name":"PARENTNAME","targetName":"","targetNameName":"","display":"上级党支部名称","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowJOIN_ORG,this.getParamsValue,'','ThreeSessionAndOneLession-JOIN_ORG',this.jsSuccess);


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




$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PARTY_ORG_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#PARTY_TYPE').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["PARTY_TYPE"] != null && pageParams.formData["PARTY_TYPE"] != ''){    $('#PARTY_TYPE').val(pageParams.formData["PARTY_TYPE"]);}else if($('#PARTY_TYPE').attr("initValue")!=undefined&&$.trim($('#PARTY_TYPE').attr("initValue"))!=''){    $('#PARTY_TYPE').val($('#PARTY_TYPE').attr("initValue"));    pageParams.formData["PARTY_TYPE"] = $('#PARTY_TYPE').attr("initValue");}else{    }}});

            $('#MEET_TYPE').on('change',function(e){
            
 function addCheckEd(name, index) {
 var meetZj = $("#MEET_ZJ");
 meetZj.append('<label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ' + index + '" name="MEET_ZJ" title="' + name + '" value="' + name + '"> ' + name + ' </label>');
 }

 /*---*/
 function changeSomeThing() {//此方法于熊裕昌 2024年9月6日加
 function updateAtt() {
 var checkboxes = document.querySelectorAll('.checkbox-inline input[type="checkbox"]');
 var isChecked = false;

 for (var i = 0; i < checkboxes.length; i++) {
 if (checkboxes[i].checked) {
 var label = checkboxes[i].parentNode.textContent.trim();
 console.log(label);
 if (label === '党组织选举') {
 isChecked = true;
 console.log('isChecked',isChecked)
 break;

 }
 console.log('isChecked',isChecked);
 }
 }

 var spanElement = document.getElementById('aAAqdPPuXNI12T97c7AiWs6idHRKhUSb');
 console.log('spanElement',spanElement);
 if (isChecked) {
 console.log("附件框必填了--------------------")
 spanElement.setAttribute('required', true);
 spanElement.setAttribute('aria-required', true);
 } else {
 spanElement.removeAttribute('required');
 spanElement.removeAttribute('aria-required');

 }
 }

 var checkboxes = document.querySelectorAll('.checkbox-inline input[type="checkbox"]');
 for (var i = 0; i < checkboxes.length; i++) {
 checkboxes[i].addEventListener('change', updateAtt)
 }
 console.log("事件绑定成功了")
 }

 /*---*/

 var value = e.target.value;
 var a1 = $("#PARTY_TYPE").val();
 switch (value) {
 case "1":
 if (a1 == 2) {
 layer.msg("请选择其他会议类型");
 this.value = "";
 return false;
 }
 var checkArr = ['党组织选举', '发展党员', '党员学习', '民主评议', '推优评先', '党风廉政教育', '党员处理处分、末端监督', '党务公开', '党费、党建活动经费', '铸心突击队', '党建+质量', '党建共建', '党员积分', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "2":
 if (a1 == 2) {
 layer.msg("请选择其他会议类型");
 this.value = "";
 return false;
 }
 var checkArr = ['党组织选举', '发展党员', '党员学习', '民主评议', '推优评先', '党风廉政教育', '党员处理处分、末端监督', '党务公开', '党费、党建活动经费', '铸心突击队', '党建+质量', '党建共建', '党员积分', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];

 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "3":
 var checkArr = ['党员学习', '党风廉政教育', '党建+质量', '党建共建', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 break;
 case "4":
 var checkArr = ['党组织选举', '党风廉政教育', '党员处理处分、末端监督', '党建共建', '主题党日', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "5":
 if (a1 == 1) {
 layer.msg("请选择其他会议类型");
 this.value = "";
 return false;
 }
 var checkArr = ['党组织选举', '发展党员', '党员学习', '民主评议', '推优评先', '党风廉政教育', '党员处理处分、末端监督', '党务公开', '党费、党建活动经费', '铸心突击队', '党建+质量', '党建共建', '党员积分', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "6":
 if (a1 == 1) {
 layer.msg("请选择其他会议类型");
 this.value = "";
 return false;
 }
 var checkArr = ['党组织选举', '发展党员', '党员学习', '民主评议', '推优评先', '党风廉政教育', '党员处理处分、末端监督', '党务公开', '党费、党建活动经费', '铸心突击队', '党建+质量', '党建共建', '党员积分', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "0":
 var checkArr = ['党组织选举', '发展党员', '党员学习', '民主评议', '推优评先', '党风廉政教育', '党员处理处分、末端监督', '党务公开', '党费、党建活动经费', '铸心突击队', '党建+质量', '党建共建', '党员积分', '主题党日', '合规', '其他', '落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文'];
 $("#MEET_ZJ").children().remove();
 for (var i = 0; i < checkArr.length; i++) {
 addCheckEd(checkArr[i], i);
 }
 changeSomeThing();
 break;
 case "10":
 layer.msg("请选择其他类型");
 this.value = "";
 return false;
 break;
 }



        });
            if(pageParams.urlParam.id == undefined){
function addCheckEd(name,index){
var meetZj = $("#MEET_ZJ");
meetZj.append('<label class="checkbox-inline" style=";"> <input type="checkbox" id="MEET_ZJ'+index+'" name="MEET_ZJ" title="'+name+'" value="'+name+'"> '+name+' </label>');
}
var checkArr = ['落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文','主题形势任务教育','党组织选举','发展党员','党员学习','民主评议','推优评先','党风廉政教育','党员处理处分、末端监督','党务公开','党费、党建活动经费','铸心突击队','党建+质量','党建共建','党员积分','主题党日','合规','党组织学习组研讨报备','其他'];
$("#MEET_ZJ").children().remove(); 
for(var i = 0;i<checkArr.length;i++){
 addCheckEd(checkArr[i],i);
 }
}



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
        



$('#DUE_PEOPLE_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#DUE_PEOPLE_NUM').trigger('click');
});

$("#DUE_PEOPLE_NUM").on("keyup",function(){
    if($("#DUE_PEOPLE_NUM").val()>999999999999999){
        $("#DUE_PEOPLE_NUM").val(999999999999999);
        layer.msg("应到会人数最大值为\""+999999999999999+"\"");
    }
});


$('#ACTUAL_PEOPLE_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#ACTUAL_PEOPLE_NUM').trigger('click');
});

$("#ACTUAL_PEOPLE_NUM").on("keyup",function(){
    if($("#ACTUAL_PEOPLE_NUM").val()>999999999999999){
        $("#ACTUAL_PEOPLE_NUM").val(999999999999999);
        layer.msg("实到会人数最大值为\""+999999999999999+"\"");
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
            layer.msg("缺席人数最大值为\""+999999999999999+"\"");
        }
        $('#LEAVE_PEOPLE_NUM').val(calculateValue).trigger("change").trigger("blur");
    }

$('.number-box-act').click(function(event) {
   $('#LEAVE_PEOPLE_NUM').trigger('click');
});

$("#LEAVE_PEOPLE_NUM").on("keyup",function(){
    if($("#LEAVE_PEOPLE_NUM").val()>999999999999999){
        $("#LEAVE_PEOPLE_NUM").val(999999999999999);
        layer.msg("缺席人数最大值为\""+999999999999999+"\"");
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
        

            $('#JOIN_PEOPLE_NEW').on('click',function(e){
            layer.open({
 type : 2, 
	 area : ['100%', '100%'], 
	 title: '选择人员', 
	 skin: 'bs-modal', 
	 maxmin: false, 
	 btn: ['确定', '取消'], 
 content:"avicit/pb/dynThreeFour/DynThreeFourSelectUser/toDynThreeSelectUserManage",
 yes:function(index,layero){
 var iframeWin = layero.find('iframe')[0].contentWindow;
 var item = iframeWin.getGridName();
 $("#JOIN_PEOPLE_NEW").val(item);
 layer.close(index); 
 },
 cancel: function(index, layero){ 
	 layer.close(index); 
	 }
 

});
        });
            $("#JOIN_PEOPLE_NEW").attr('readonly','readonly');




	LX_POSENDetailCol = 'LX_POSEN';
	

function LX_POSENClickFun(){
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
				this.setRowLX_POSEN = function(mapping,rowData){
					

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

						if(LX_POSENDetailCol == mapVer.targetName){
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
                , "20","SELECT T.NAME,T.ID,T.PARTY_NAME FROM party_member_activist_org_view T ORDER BY T.PARTY_NAME",'[{"label":"党组织名称","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"},{"label":"名称","width":"50","align":"center","orderBy":"","name":"NAME"}]','[{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党组织名称","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"LX_POSEN","targetNameName":"列席人员","display":"名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowLX_POSEN,this.getParamsValue,'','ThreeSessionAndOneLession-LX_POSEN',this.jsSuccess);


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



						if(LX_POSENDetailCol == mapVer.targetName){
							detailName = fieldValue;
						}else if("" == mapVer.targetName){
							detailId = fieldValue;
						}
					}

				}
			 else{
					$("#LX_POSEN").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function LX_POSENDetail(id){
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


			$('#LX_POSEN')
	.on(' focus',function(e){
	LX_POSENClickFun();
	this.blur();
});

/*
$('#LX_POSENButton').on('click',function(e){
	LX_POSENClickFun();
	this.blur();
});

$('#LX_POSENButton').click(function(event) {
   $('#LX_POSEN').trigger('focus');
});*/






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
										var chry = $("#JOIN_PEOPLE_NEW").val();alert(chry);var qjry = $("#LEAVEL_PEOPLE").val();alert(qjry);if (chry.indexOf(qjry) !== -1) {alert(chry.indexOf(qjry) !== -1);layer.msg(qjry+'已在参会人员列表里，请在参会人员进行修改!');return ;}
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
                , "20","SELECT T.NAME,T.ID,T.PARTY_NAME,t.party_id FROM party_member_activist_org_view T where t.PARTY_ID in (select pp.id from party_organization pp where pp.parent_id =( select po.parent_id from party_organization po where po.id in( select t1.party_id from PARTY_MEMBER t1 where t1.user_id = '@{userId}'))) ORDER BY T.PARTY_NAME",'[{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"}]','[{"name":"NAME","targetName":"LEAVEL_PEOPLE","targetNameName":"请假人员名单","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"","targetNameName":"","display":"党支部","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowLEAVEL_PEOPLE,this.getParamsValue,'','ThreeSessionAndOneLession-LEAVEL_PEOPLE',this.jsSuccess);


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

			
			var chry = $("#JOIN_PEOPLE_NEW").val();alert(chry);var qjry = $("#LEAVEL_PEOPLE").val();alert(qjry);if (chry.indexOf(qjry) !== -1) {alert(chry.indexOf(qjry) !== -1);layer.msg(qjry+'已在参会人员列表里，请在参会人员进行修改!');return ;}
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
    if (tagId != "MEET_ZJ"){
        return true;
    }
    if(operability){
                        var $tag = $('#MEET_ZJ1');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ2');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ3');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ4');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ5');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ6');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ7');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ8');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ9');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ10');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ11');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ12');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ13');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ14');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ15');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ16');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ17');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ18');
            $tag.removeAttr("disabled");
                                var $tag = $('#MEET_ZJ19');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "MEET_ZJ"){
        return;
    }

    if(operability){
        $("#MEET_ZJ").show();
    }else{
        $("#MEET_ZJ").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "MEET_ZJ"){
        return;
    }

    if (required){
        $('input[name="MEET_ZJ"]').attr("required","required");
    }else{
        $('input[name="MEET_ZJ"]').removeAttr("required","required");
    }
});
            $('input[name="MEET_ZJ"]').on('change',function(e){
            
 var checkboxes = document.querySelectorAll('input[type="checkbox"]');
 for (var i = 0; i < checkboxes.length; i++) {
 (function (checkbox) {
 checkbox.addEventListener('change', function () {
 var selectedValues = [];

 var checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
 for (var j = 0; j < checkBoxes.length; j++) {
 selectedValues.push(checkBoxes[j].value);


 }
 var containsDesiredValue = selectedValues.indexOf('党组织选举') !== -1 ;
 console.log('是否包含值：',containsDesiredValue);
 var spanElement = document.getElementById('aAAqdPPuXNI12T97c7AiWs6idHRKhUSb');

 if (containsDesiredValue) {
 spanElement.setAttribute('required', true);
 spanElement.setAttribute('aria-required', true);
 }else{

 spanElement.removeAttribute('required');
 spanElement.removeAttribute('aria-required');
 }
 


 });


 })(checkboxes[i]);


 }

        });
            var checkboxes = document.querySelectorAll('input[type="checkbox"]');
 var anyChecked =false;

 for (var i = 0; i < checkboxes.length; i++) {
 if(checkboxes[i].checked){
 anyChecked=true;
 break;
 }
 }
 
 if (!anyChecked && checkboxes.length > 0) {
 console.log('默认选中第一个值');
 checkboxes[0].checked = true;
 }


            $('#MEET_NAME').on('click',function(e){
            var PARTY_NAME = $("#JOIN_ORG").val();
var MEET_ZJ = $("#MEET_ZJ input[type='checkbox']:checked").val();
var MEET_DATE = $("#MEET_DATE").val();
var MEET_TYPE = $("#MEET_TYPE").val();
if (MEET_TYPE == 0) {
 MEET_TYPE = '党员大会';
 } else if (MEET_TYPE == 1) {
 MEET_TYPE = '支部委员会';
 } else if (MEET_TYPE == 2) {
 MEET_TYPE = '党小组会';
 } else if (MEET_TYPE == 3) {
 MEET_TYPE = '党课';
 } else if (MEET_TYPE == 4) {
 MEET_TYPE = '纪律检查委员会';
 } else if (MEET_TYPE == 5) {
 MEET_TYPE = '党委会';
 } else if (MEET_TYPE == 6) {
 MEET_TYPE = '总支委员会';
 }
 
if(PARTY_NAME==""){
 layer.msg("请输入党支部名称");
 return;
}
if(!MEET_ZJ){
 layer.msg("请选择会议关键词"); 
 return;
 }
if(MEET_DATE==""){
layer.msg("请输入会议时间");
 return;
}
var meetZt = $("#MEET_ZJ input[type='checkbox']:checked");
MEET_ZJ = "/";
for(var i = 0;i<meetZt.length;i++){
 MEET_ZJ += meetZt.eq(i).val();
 MEET_ZJ += "/";
}

$("#MEET_NAME").val(PARTY_NAME+'/'+MEET_TYPE+MEET_ZJ+MEET_DATE);

var inpElement = document.getElementById("MEET_NAME");
inpElement.readOnly = true;
        });
        



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

		                             $("#948e83e391927ff30191c5cbca6b3cdb").click(function(){
        
        window.open(_eform_base_url+"platform/eform/bpmsCRUDClient/toPrint?formInfoId=402811817f4eb25b017f63319c2c18bb&id="+id+"&type=print","_blank");
        
    });
        
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
