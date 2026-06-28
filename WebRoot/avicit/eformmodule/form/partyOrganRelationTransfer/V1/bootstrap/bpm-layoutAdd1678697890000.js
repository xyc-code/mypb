
var attachBpmInfo = {
    delOrAdd : [],
    editSecret:[]
}
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



if ($("input[name='REQUEST_DEPT']").val()==''||$("input[name='REQUEST_DEPT']").val()==null||$("input[name='REQUEST_DEPT']").val()==undefined ){
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
	$("#REQUEST_DEPT").val(macoValue);
}

    
if(typeof(EformFlow) != "undefined"){
// setTimeout(function(){


 EformFlow.prototype.afterCreateButtons=function(){

setTimeout(function(){
 var pTransferTypeCheckedVal = $("#P_TRANSFER_TYPE").find(":radio:checked").val();
 if(pTransferTypeCheckedVal == '0'){
 	//$('#P_IN_PARTY_ORG').val('');
	$('#P_IN_PARTY_ORG').on('focus',function(e){
	P_IN_PARTY_ORGClickFun();
	this.blur();
});
 
 $('#pInDeptIdsName').show();
 $('#pInDeptIdsButton').show();
 
// $('#pInDeptIdsName').val('');
 $('#pInDeptIdsName').on('focus',function(e){
 pInDeptIdsClickFun();
 $(this).blur();
});
// $('#P_PARTY_GROUPName').val('');
 //$('#P_PARTY_GROUP_NAME').val('');

// $('#P_PARTY_GROUP_ID').val('');
 $('#P_PARTY_GROUPName').attr('disabled',false);
 
 $("#OUT_DEPT_NAME").hide(); 
 }
 
 if(pTransferTypeCheckedVal == '1' ){
 	//$('#P_IN_PARTY_ORG').val('');
 //$('#P_IN_PARTY_ORG_ID').val('');
	$('#P_IN_PARTY_ORG').off('focus');
 
 
 $('#pInDeptIdsName').hide();
 $('#pInDeptIdsButton').hide();

 //$('#pInDeptIdsName').val('');
	$('#pInDeptIdsName').off('focus');
 // $('#P_PARTY_GROUP').attr("disable",true);
 
 //$('#P_PARTY_GROUPName').val('');
 //$('#P_PARTY_GROUP_NAME').val('');

 //$('#P_PARTY_GROUP_ID').val('');
 $('#P_PARTY_GROUPName').attr('disabled',true);

$("#OUT_DEPT_NAME").show(); 

 }	
 
 },500);


};

}



 


//};



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

window.AUTO_CODEautocode = new AutoCode('partyTransferCode',"AUTO_CODE",false,"AUTO_CODE",undefined
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
						autoCode: "partyTransferCode",
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
									autoCode: "partyTransferCode",
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







	P_IN_PARTY_ORGDetailCol = 'P_IN_PARTY_ORG';
	

function P_IN_PARTY_ORGClickFun(){
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
				this.setRowP_IN_PARTY_ORG = function(mapping,rowData){
					

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

						if(P_IN_PARTY_ORGDetailCol == mapVer.targetName){
							detailName = rowData[mapVer.name];
						}else if("" == mapVer.targetName){
							detailId = rowData[mapVer.name];
						}
					}
										$("#P_PARTY_GROUP_NAME").val('');$("#P_PARTY_GROUPName").val('');$("#P_PARTY_GROUP_ID").val('');
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
                , "20","select t.party_name,t.id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%' and t.party_name not like '%无%' order by t.tree_sorts",'[{"label":"党支部ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"},{"label":"目的党支部","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"ID","targetName":"P_IN_PARTY_ORG_ID","targetNameName":"目的支部ID","display":"党支部ID","transform":"","lookupType":"","filter":false},{"name":"PARTY_NAME","targetName":"P_IN_PARTY_ORG","targetNameName":"目的支部","display":"目的党支部","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowP_IN_PARTY_ORG,this.getParamsValue,'','partyOrganRelationTransfer-P_IN_PARTY_ORG',this.jsSuccess);


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

						if(P_IN_PARTY_ORGDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#P_IN_PARTY_ORG").val(null);
				}

			
			$("#P_PARTY_GROUP_NAME").val('');$("#P_PARTY_GROUPName").val('');$("#P_PARTY_GROUP_ID").val('');
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function P_IN_PARTY_ORGDetail(id){
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


			$('#P_IN_PARTY_ORG')
	.on(' focus',function(e){
	P_IN_PARTY_ORGClickFun();
	this.blur();
});

/*
$('#P_IN_PARTY_ORGButton').on('click',function(e){
	P_IN_PARTY_ORGClickFun();
	this.blur();
});

$('#P_IN_PARTY_ORGButton').click(function(event) {
   $('#P_IN_PARTY_ORG').trigger('focus');
});*/




$('#controlP_PARTY_GROUP').avicselect({
height:'200px',
shadeClose: false,
shade:0,
code:'partyGroupSelect',
listStyle:'',
afterSelect:function(data){
if(data && data.length > 0){
 $("#P_PARTY_GROUP_ID").val(data[0].KEY); 
 $("#P_PARTY_GROUP_NAME").val(data[0].VALUE); 
 }
},
beferOpenPream:function(){
    var P_IN_PARTY_ORG_ID = $("#P_IN_PARTY_ORG_ID").val();
return { partyIdSearch : P_IN_PARTY_ORG_ID };
},
dataBind:{'KEY':'P_PARTY_GROUP','VALUE':'P_PARTY_GROUPNAME'}
});



 if(selectCustomItemP_PARTY_GROUP.length>0)
    {
    	$.ajax({
			 url: 'platform/eform/plugin/getInitCustomInfo/'+'partyGroupSelect'+'/'+selectCustomItemP_PARTY_GROUP,
			 type : 'post',
			 dataType : 'json',
             async:false,
			 success : function(r){
			 var allRows=$.parseJSON(r.rows);
			 for(var i=0;i<allRows.length;i++)
			 {
			 	if(allRows[i].KEY==selectCustomItemP_PARTY_GROUP)
			 	{
			 		$('#P_PARTY_GROUPName').val(allRows[i].VALUE);
					$('#P_PARTY_GROUP').val(allRows[i].KEY);
			 	}

			 }
			}

		   });
    }




beforeSaveEvent.addBeforeSaveEvent(function(formData){
	formData["P_PARTY_GROUPNAME"] = $("#P_PARTY_GROUPName").val();
	formData["P_PARTY_GROUP"] = $("#P_PARTY_GROUP").val();
});



    if($("#P_PARTY_GROUP_NAME")){
 $("#P_PARTY_GROUPName").val($("#P_PARTY_GROUP_NAME").val());
 
 }


//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "P_TRANSFER_TYPE"){
        return true;
    }
    if(operability){
                        var $tag = $('#P_TRANSFER_TYPE1');
            $tag.removeAttr("disabled");
                                var $tag = $('#P_TRANSFER_TYPE2');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "P_TRANSFER_TYPE"){
        return;
    }

    if(operability){
        $("#P_TRANSFER_TYPE").show();
    }else{
        $("#P_TRANSFER_TYPE").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "P_TRANSFER_TYPE"){
        return;
    }

    if (required){
        $('input[name="P_TRANSFER_TYPE"]').attr("required","required");
    }else{
        $('input[name="P_TRANSFER_TYPE"]').removeAttr("required","required");
    }
});
            $('input[name="P_TRANSFER_TYPE"]').on('click',function(e){
             
if($(this).val() == '0'){
 	$('#P_IN_PARTY_ORG').val('');
	$('#P_IN_PARTY_ORG').on('focus',function(e){
	P_IN_PARTY_ORGClickFun();
	this.blur();
});

 $('#pInDeptIdsName').show();
 $('#pInDeptIdsButton').show();
 

 
 $('#P_PARTY_GROUPName').val('');
 $('#P_PARTY_GROUP_NAME').val('');

 $('#P_PARTY_GROUP_ID').val('');
 $('#P_PARTY_GROUPName').attr('disabled',false);
 
 $("#OUT_DEPT_NAME").hide(); 

 //$("#pInDeptIdsName").rules("add",{required:true});*/
// setTimeout(function(){

// $("#pInDeptIdsName").rules("add",{required:true});

 
 //},1000);

 
 }
if($(this).val() == '1' ){
 $('#P_IN_PARTY_ORG').val('');
 $('#P_IN_PARTY_ORG_ID').val('');
$('#P_IN_PARTY_ORG').off('focus');
 

$('#pInDeptIdsName').hide();
 $('#pInDeptIdsButton').hide();

 $('#P_PARTY_GROUP').attr("disable",true);
 
 $('#P_PARTY_GROUPName').val('');
 $('#P_PARTY_GROUP_NAME').val('');

 $('#P_PARTY_GROUP_ID').val('');
 $('#P_PARTY_GROUPName').attr('disabled',true);

$("#OUT_DEPT_NAME").show(); 
// setTimeout(function(){
//$("#pInDeptIdsName").rules("remove");
 //},1000);
 }	


        });
            
/*if($(this).val() == '0'){
 	$('#P_IN_PARTY_ORG').val('');
	$('#P_IN_PARTY_ORG').on('focus',function(e){
	P_IN_PARTY_ORGClickFun();
	this.blur();
});
 
 $('#pInDeptIdsName').show();
 $('#pInDeptIdsButton').show();
 
 $('#pInDeptIdsName').val('');
 $('#pInDeptIdsName').on(' focus',function(e){
 pInDeptIdsClickFun();
 $(this).blur();
});
 
 
 $('#P_PARTY_GROUPName').val('');
 $('#P_PARTY_GROUP_NAME').val('');

 $('#P_PARTY_GROUP_ID').val('');
 $('#P_PARTY_GROUPName').attr('disabled',false);
 
 $("#OUT_DEPT_NAME").hide(); 
 $("#OUT_DEPT_NAME").rules("remove");
 $("#pInDeptIdsName").rules("add",{required:true});

 
 }
if($(this).val() == '1' ){
 	$('#P_IN_PARTY_ORG').val('');
 $('#P_IN_PARTY_ORG_ID').val('');
	$('#P_IN_PARTY_ORG').off('focus');
 
 
 $('#pInDeptIdsName').hide();
 $('#pInDeptIdsButton').hide();

 $('#pInDeptIdsName').val('');
	$('#pInDeptIdsName').off('focus');
 //$("#pInDeptIdsName").rules("remove");
 // $('#P_PARTY_GROUP').attr("disable",true);
 
 $('#P_PARTY_GROUPName').val('');
 $('#P_PARTY_GROUP_NAME').val('');

 $('#P_PARTY_GROUP_ID').val('');
 $('#P_PARTY_GROUPName').attr('disabled',true);

$("#OUT_DEPT_NAME").show(); 
 $("#OUT_DEPT_NAME").rules("add",{required:true});
 $("#pInDeptIdsName").rules("remove");
 

 }	

*/






$('#pInDeptIdsName').on(' focus',function(e){
    pInDeptIdsClickFun();
    $(this).blur();
});

function pInDeptIdsClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'pInDeptIds',textFiled:'pInDeptIdsName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            //$("#P_IN_DEPT_ID").val(dept.deptids);
            }

    });

}










var DYN_POT_MEMBERTabInitFlag = false;

									var DYN_POT_MEMBERTRANSFER_TYPESelect = {"0":"内部调动","1":"外部转出"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "PARTY_ORG_TRANSFER_TYPE"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_POT_MEMBERTRANSFER_TYPESelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
											
var dataGridColModel_DYN_POT_MEMBER =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
         		  		  ,{ label:'姓名', name:'USER_NAME', width:20,
		  		            editable : true,
		                  align:'left',
		        edittype:'custom',
	     		  		  sortable:false,
		                            editoptions:{custom_element:dictinaryElem, custom_value:dictinaryValue,rowCount:'20',
      queryStatement:"select t.name, t.USER_ID, t.party_name, t.PARTY_ID, t.PARTY_MONEY, t.PARTY_TYPE, t.PARTY_TYPE AS PARTY_TYPE_NAME from PARTY_MEMBER_ORGANIZATION_VIEW t where t.PARTY_ID in (select t1.party_id from PARTY_MEMBER t1 where t1.user_id = '@{userId}')",
      dataGridColModel:'[{"label":"党员类别ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"PARTY_TYPE"},{"label":"支部ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"PARTY_ID"},{"label":"党员ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"USER_ID"},{"label":"党员","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"支部","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"},{"label":"党费","width":"50","align":"center","orderBy":"3","name":"PARTY_MONEY"},{"label":"党员类别","width":"50","align":"center","orderBy":"4","name":"PARTY_TYPE_NAMEName"}]',
      mapping:'[{"name":"PARTY_TYPE","targetName":"PARTY_MEMBER_TYPE","targetNameName":"党员类型ID","display":"党员类别ID","transform":"","lookupType":"","filter":false},{"name":"PARTY_ID","targetName":"OUT_PARTY_ORG_ID","targetNameName":"转出支部ID","display":"支部ID","transform":"","lookupType":"","filter":false},{"name":"USER_ID","targetName":"USER_ID","targetNameName":"姓名ID","display":"党员ID","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"USER_NAME","targetNameName":"姓名","display":"党员","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"OUT_PARTY_ORG","targetNameName":"转出支部","display":"支部","transform":"","lookupType":"","filter":true},{"name":"PARTY_MONEY","targetName":"PARTY_MONEY_NEW","targetNameName":"党费","display":"党费","transform":"","lookupType":"","filter":false},{"name":"PARTY_TYPE_NAMEName","targetName":"PARTY_MEMBER_TYPE_NAME","targetNameName":"党员类型","display":"党员类别","transform":"7","lookupType":"PM_PARTY_TYPE","filter":false}]',
      jsSuccess:'',
      jsBefore:'',
      jsAfter:'',
      dataCombox:'-1',
      dataComboxType:'-1',
      detail:'',
      waitSelect:'N',
      isMuti:'N',
      inputChk:'N',
      dicUniqueCode:'partyOrganRelationTransfer-DYN_POT_MEMBER-USER_NAME'}}
                       ,{ label:'姓名ID', name: 'USER_ID', width:20,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'原所在支部', name: 'OUT_PARTY_ORG', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'转出支部ID', name: 'OUT_PARTY_ORG_ID', width:20,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                     	 ,{ label:'转出类别Id', name:'TRANSFER_TYPE', width:75, hidden:true}
   	     ,{ label:'转出类别', name:'TRANSFER_TYPEName', width: 20,
		            editable : false,
		                      align:'left',
		       	 edittype:"custom",
   	                hidden:true,
         		  		  sortable:false,
		     	     formatter:  formatDYN_POT_MEMBERTRANSFER_TYPE
	  						  	     , editoptions: {      callBack:function(e){debugger;
var rowid = jQuery("#DYN_POT_MEMBER").jqGrid('getGridParam','selrow');
console.log(rowid);/*rowid,colname, data, class, properties	*/
var rowData= jQuery("#DYN_POT_MEMBER").jqGrid('getRowData',rowid);
if(rowData.TRANSFER_TYPE=='1'){
jQuery("#DYN_POT_MEMBER").setColProp("IN_PARTY_ORG",{edittype:'text'});
jQuery("#DYN_POT_MEMBER").setCell(rowid,'IN_PARTY_ORG','&nbsp;');
jQuery("#DYN_POT_MEMBER").setCell(rowid,'IN_PARTY_ORG_ID','&nbsp');

}else{

jQuery("#DYN_POT_MEMBER").setColProp("IN_PARTY_ORG",{edittype:'custom',editoptions:{custom_element:dictinaryElem, custom_value:dictinaryValue,rowCount:'20',
 queryStatement:"select t.party_name,t.parent_id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1'",
 dataGridColModel:'[{"label":"党支部ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"PARENT_ID"},{"label":"党支部","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]',
 mapping:'[{"name":"PARENT_ID","targetName":"IN_PARTY_ORG_ID","targetNameName":"目的支部ID","display":"党支部ID","transform":"","lookupType":"","filter":false},{"name":"PARTY_NAME","targetName":"IN_PARTY_ORG","targetNameName":"目的支部","display":"党支部","transform":"","lookupType":"","filter":true}]',
 jsSuccess:'',
 jsBefore:'',
 jsAfter:'',
 dataCombox:'-1',
 dataComboxType:'-1',
 detail:'',
 waitSelect:'N',
 isMuti:'N',
 inputChk:'N',
 dicUniqueCode:'partyOrganRelationTransfer-DYN_POT_MEMBER-IN_PARTY_ORG'}});
jQuery("#DYN_POT_MEMBER").setCell(rowid,'IN_PARTY_ORG','&nbsp;');
}},
      	  custom_element:selectElem, custom_value:selectValue, forId:'TRANSFER_TYPE',
   	     value: function(){return DYN_POT_MEMBERTRANSFER_TYPESelect;}}
	  }
                       ,{ label:'目的支部ID', name: 'IN_PARTY_ORG_ID', width:20,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'目的支部', name: 'IN_PARTY_ORG', width:20,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'党员类型ID', name: 'PARTY_MEMBER_TYPE', width:20,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'党费', name: 'PARTY_MONEY_NEW', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'党费废弃', name:'PARTY_MONEY', width:20,
		            editable : false,
		                  align:'left',
		        editrules:{number:true},
		            hidden:true,
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  , defaultValue: ""}
		  	  }
	                   ,{ label:'所交党费截至日期', name:'PARTY_MONEY_FDATE', width:20,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d', newformat: 'Y-m-d'},
			          editoptions:{custom_element:dateElem,custom_value:dateValue
			 		 }}
                                ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'党员类型', name: 'PARTY_MEMBER_TYPE_NAME', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_POT_MEMBER = '{}';


DYN_POT_MEMBERUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                                                if (typeof colname=="undefined" || colname == "" || colname === "PARTY_MONEY" ){
				                }
                };

if (window.DYN_POT_MEMBER_comid == null || window.DYN_POT_MEMBER_comid == undefined || window.DYN_POT_MEMBER_comid == '') {
	window.DYN_POT_MEMBER_comid = id;
}

$('#DYN_POT_MEMBER').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_POT_MEMBER',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_POT_MEMBER_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f241b5d017f24306e180254",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_POT_MEMBER,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
		required:"required",
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
	height:"150",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_POT_MEMBERnorecords").hide();//隐藏提示信息
    $("#DYN_POT_MEMBERPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_POT_MEMBER').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_POT_MEMBERnorecords").html() == null) {
            $('#DYN_POT_MEMBER').parent().append("<div class='no_data' style='display: none' id='DYN_POT_MEMBERnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_POT_MEMBER').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_POT_MEMBERnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_POT_MEMBERnorecords img").css("width","120px");
        }else{
            $("#DYN_POT_MEMBERnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_POT_MEMBERnorecords").show();//显示提示信息
        $("#DYN_POT_MEMBERPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_POT_MEMBER').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_POT_MEMBERnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_POT_MEMBERnorecords img").css("width","120px");
	}else{
		$("#DYN_POT_MEMBERnorecords img").css("width",(height/1.9)+"px");
	}
																},


beforeEditCell:function(){
	$(".datatable").not("#DYN_POT_MEMBER").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_POT_MEMBERReload = function(){
	var _isInvalid = true;
	$("#DYN_POT_MEMBER").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_POT_MEMBERTabInitFlag = true;
	$('#DYN_POT_MEMBER').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_POT_MEMBERTabReload = function(forceFlag){
	if(!DYN_POT_MEMBERTabInitFlag  || forceFlag){
		DYN_POT_MEMBERReload();
	}

}


$('#DYN_POT_MEMBER').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_POT_MEMBER').append($('#DYN_POT_MEMBERToolbar'));

    
    
    
    
    
function formatDYN_POT_MEMBERTRANSFER_TYPE(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
    
    
    
    
    
    
    


                                        
DYN_POT_MEMBERReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_POT_MEMBER = 0;
var newRowStart_DYN_POT_MEMBER = "new_row";


/**
 * 添加页面
 */
insertTableDYN_POT_MEMBER = function(){
	$('#DYN_POT_MEMBER').jqGrid('endEditCell');
	$("#DYN_POT_MEMBERnorecords").hide();//隐藏提示信息
	$("#DYN_POT_MEMBERPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_POT_MEMBER + newRowIndex_DYN_POT_MEMBER;
	var parameters = {
		rowID : newRowId,
		initdata : {
																																																																	},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_POT_MEMBER').jqGrid('addRow', parameters);
	newRowIndex_DYN_POT_MEMBER++;  
};



/**
 * 删除
 */
deleteTableDYN_POT_MEMBER = function(){
	var rows = [];
	rows = $('#DYN_POT_MEMBER').jqGrid('getGridParam','selarrrow');


	$('#DYN_POT_MEMBER').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_POT_MEMBER').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_POT_MEMBER',
					data: {ids : ids.join(','),formInfoId:'402811817f241b5d017f24306e180254',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_POT_MEMBER').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
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





$('#DYN_POT_MEMBER').setGridWidth(700);
$('#DYN_POT_MEMBER').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_POT_MEMBER_insertBtn').bind('click',function(){
	insertTableDYN_POT_MEMBER();
});

//按钮绑定事件
$('#DYN_POT_MEMBER_deleteBtn').bind('click',function(){
	deleteTableDYN_POT_MEMBER();
});

//自定义按钮绑定事件
																//列onchange事件
							DYN_POT_MEMBERTRANSFER_TYPEChange = function(_this,e){
		debugger;
var rowid = jQuery("#DYN_POT_MEMBER").jqGrid('getGridParam','selrow');
console.log(rowid);/*rowid,colname, data, class, properties	*/
var rowData= jQuery("#DYN_POT_MEMBER").jqGrid('getRowData',rowid);
if(rowData.TRANSFER_TYPE=='1'){
jQuery("#DYN_POT_MEMBER").setColProp("IN_PARTY_ORG",{edittype:'text'});
jQuery("#DYN_POT_MEMBER").setCell(rowid,'IN_PARTY_ORG','&nbsp;');
jQuery("#DYN_POT_MEMBER").setCell(rowid,'IN_PARTY_ORG_ID','&nbsp');

}else{

jQuery("#DYN_POT_MEMBER").setColProp("IN_PARTY_ORG",{edittype:'custom',editoptions:{custom_element:dictinaryElem, custom_value:dictinaryValue,rowCount:'20',
 queryStatement:"select t.party_name,t.parent_id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1'",
 dataGridColModel:'[{"label":"党支部ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"PARENT_ID"},{"label":"党支部","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]',
 mapping:'[{"name":"PARENT_ID","targetName":"IN_PARTY_ORG_ID","targetNameName":"目的支部ID","display":"党支部ID","transform":"","lookupType":"","filter":false},{"name":"PARTY_NAME","targetName":"IN_PARTY_ORG","targetNameName":"目的支部","display":"党支部","transform":"","lookupType":"","filter":true}]',
 jsSuccess:'',
 jsBefore:'',
 jsAfter:'',
 dataCombox:'-1',
 dataComboxType:'-1',
 detail:'',
 waitSelect:'N',
 isMuti:'N',
 inputChk:'N',
 dicUniqueCode:'partyOrganRelationTransfer-DYN_POT_MEMBER-IN_PARTY_ORG'}});
jQuery("#DYN_POT_MEMBER").setCell(rowid,'IN_PARTY_ORG','&nbsp;');
}
    }
									

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_POT_MEMBER_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_POT_MEMBER_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_POT_MEMBER_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_POT_MEMBER_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_POT_MEMBER_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_POT_MEMBER_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_POT_MEMBER_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_POT_MEMBER_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_POT_MEMBER_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_POT_MEMBER_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_POT_MEMBER_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_POT_MEMBER_deleteBtn").css("display","none");
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
	return $('#DYN_POT_MEMBER').validateJqGrid("validate");
});

$('#DYN_POT_MEMBER').validateJqGrid("addValidate","USER_NAME","required");
		$('#DYN_POT_MEMBER').validateJqGrid("addValidate","USER_NAME","maxlength",{maxlength:255});
				$('#DYN_POT_MEMBER').validateJqGrid("addValidate","USER_ID","maxlength",{maxlength:255});
		$('#DYN_POT_MEMBER').validateJqGrid("addValidate","OUT_PARTY_ORG","required");
		$('#DYN_POT_MEMBER').validateJqGrid("addValidate","OUT_PARTY_ORG","maxlength",{maxlength:255});
				$('#DYN_POT_MEMBER').validateJqGrid("addValidate","OUT_PARTY_ORG_ID","maxlength",{maxlength:255});
				$('#DYN_POT_MEMBER').validateJqGrid("addValidate","TRANSFER_TYPE","maxlength",{maxlength:255});
				$('#DYN_POT_MEMBER').validateJqGrid("addValidate","IN_PARTY_ORG_ID","maxlength",{maxlength:255});
				$('#DYN_POT_MEMBER').validateJqGrid("addValidate","IN_PARTY_ORG","maxlength",{maxlength:255});
		$('#DYN_POT_MEMBER').validateJqGrid("addValidate","PARTY_MEMBER_TYPE","required");
		$('#DYN_POT_MEMBER').validateJqGrid("addValidate","PARTY_MEMBER_TYPE","maxlength",{maxlength:255});
		$('#DYN_POT_MEMBER').validateJqGrid("addValidate","PARTY_MONEY_NEW","required");
		$('#DYN_POT_MEMBER').validateJqGrid("addValidate","PARTY_MONEY_NEW","maxlength",{maxlength:255});
				$('#DYN_POT_MEMBER').validateJqGrid("addValidate","PARTY_MONEY","maxlength",{maxlength:20});
		$('#DYN_POT_MEMBER').validateJqGrid("addValidate","PARTY_MONEY_FDATE","required");
		$('#DYN_POT_MEMBER').validateJqGrid("addValidate","PARTY_MONEY_FDATE","maxlength",{maxlength:255});
				$('#DYN_POT_MEMBER').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		$('#DYN_POT_MEMBER').validateJqGrid("addValidate","PARTY_MEMBER_TYPE_NAME","required");
		$('#DYN_POT_MEMBER').validateJqGrid("addValidate","PARTY_MEMBER_TYPE_NAME","maxlength",{maxlength:255});
		
    
if(typeof(EformFlow) == "undefined"){

var partyMemberOrganize;
var partyMemberOrganizeId;
var userId = pageParams.session.userId;
//console.log(userId);
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
    	// debugger;
var pTransferTypeCheckedVal = $("#P_TRANSFER_TYPE").find(":radio:checked").val();
 if(pTransferTypeCheckedVal == '0'){

 var pInDeptIds = $('#pInDeptIds').val();
    var P_IN_PARTY_ORG_ID = $('#P_IN_PARTY_ORG_ID').val();
    var P_PARTY_GROUP_ID = $('#P_PARTY_GROUP_ID').val();
 
   
   if(P_IN_PARTY_ORG_ID == ''){
       $("#page_saveButton").removeClass("disabled");
   layer.msg("目的支部不能为空！！！");
 
     return false;
   }
      
//    if(P_PARTY_GROUP_ID == ''){
//       $("#page_saveButton").removeClass("disabled");
//    layer.msg("目的党小组不能为空！！！");
      
//      return false;
//    }
if(pInDeptIds == ''){
   $("#page_saveButton").removeClass("disabled");
   layer.msg("目的部门不能为空！！！");
  
     return false;
   }
 $('#P_PARTY_GROUPName').attr('disabled',false);
 $("#OUT_DEPT_NAME").hide(); 
 }
 if(pTransferTypeCheckedVal == '1' ){
 var P_IN_PARTY_ORG = $('#P_IN_PARTY_ORG').val();

    var OUT_DEPT_NAME = $('#OUT_DEPT_NAME').val();
 
   
   if(P_IN_PARTY_ORG == ''){
      $("#page_saveButton").removeClass("disabled");
   layer.msg("目的支部不能为空！！！");
     return false;
   }
      
   if(OUT_DEPT_NAME == ''){
      $("#page_saveButton").removeClass("disabled");
   layer.msg("目的部门不能为空！！！");
     return false;
   }
 }	
 
    }
    else {
    	// debugger;
var pTransferTypeCheckedVal = $("#P_TRANSFER_TYPE").find(":radio:checked").val();
 if(pTransferTypeCheckedVal == '0'){

 var pInDeptIds = $('#pInDeptIds').val();
    var P_IN_PARTY_ORG_ID = $('#P_IN_PARTY_ORG_ID').val();
    var P_PARTY_GROUP_ID = $('#P_PARTY_GROUP_ID').val();
 
   
   if(P_IN_PARTY_ORG_ID == ''){
       $("#page_saveButton").removeClass("disabled");
   layer.msg("目的支部不能为空！！！");
 
     return false;
   }
      
//    if(P_PARTY_GROUP_ID == ''){
//       $("#page_saveButton").removeClass("disabled");
//    layer.msg("目的党小组不能为空！！！");
      
//      return false;
//    }
if(pInDeptIds == ''){
   $("#page_saveButton").removeClass("disabled");
   layer.msg("目的部门不能为空！！！");
  
     return false;
   }
 $('#P_PARTY_GROUPName').attr('disabled',false);
 $("#OUT_DEPT_NAME").hide(); 
 }
 if(pTransferTypeCheckedVal == '1' ){
 var P_IN_PARTY_ORG = $('#P_IN_PARTY_ORG').val();

    var OUT_DEPT_NAME = $('#OUT_DEPT_NAME').val();
 
   
   if(P_IN_PARTY_ORG == ''){
      $("#page_saveButton").removeClass("disabled");
   layer.msg("目的支部不能为空！！！");
     return false;
   }
      
   if(OUT_DEPT_NAME == ''){
      $("#page_saveButton").removeClass("disabled");
   layer.msg("目的部门不能为空！！！");
     return false;
   }
 }	
 
    }

    var processDef = new FlowListEditorBySec("partyOrganRelationTransfer",JSON.stringify(jsonData));
    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    var saveFlag = beforeSaveEvent.changeData(jsonData);
    if(saveFlag){
        FlowListEditorBySec.prototype.doStart = function(pdId){
            var tableId = $('#tableId').val();
            var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=402811817f241b5d017f24306e180254&tableId='+tableId+'&defineId='+pdId+'&formcode=partyOrganRelationTransfer';
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
