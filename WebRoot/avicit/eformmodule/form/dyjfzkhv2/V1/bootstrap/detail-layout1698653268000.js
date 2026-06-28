$(function(){
	



$('#DRAFTSMANName').on(' focus',function(e){

DRAFTSMANClickFun();
this.blur();
});

function DRAFTSMANClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'DRAFTSMAN',textFiled:'DRAFTSMANName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#DRAFTSMANButton').off('click');

if ($('#DRAFTSMAN').val() == null||$('#DRAFTSMAN').val()==''||$('#DRAFTSMAN').val()==undefined) {
    $("#DRAFTSMAN").val(session.userId);

    var $li = $('<li style="width:auto;float: left;padding-left: 5px;height:18px"></li>');
    var $a = $('<a style="cursor:pointer" tagid="'+session.userId+'">'+session.userName+'</a>').click(function(e){
    var id = $(this).attr("tagid");
    var url = "";
    var chuantouwidth = ""||"100%";
    var chuantouheight = ""||"100%";
    if (url.indexOf("?")>0){
    url = url + "&id=";
    }else{
    url = url + "?id=";
    }
    layer.open({
    type: 2,
    title: '用户详细',
    skin: 'bs-modal',
    shade:0.3,
    shadeClose : true,
    area: [chuantouwidth, chuantouheight],
    maxmin: false,
    content: url + id
    });
    return false;
    });
        $li.append($a);
    $('#DRAFTSMANAreaName').append($li);
}
if ($('#DRAFTSMANName').val() == null||$('#DRAFTSMANName').val()==''||$('#DRAFTSMANName').val()==undefined) {
$("#DRAFTSMANName").val(session.userName);
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var DRAFTSMAN_colSecret = $('#');
    var secretLevelValue;
    if(DRAFTSMAN_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var DRAFTSMAN_selectedList = $('#DRAFTSMAN').val();
    var flag = true;
    if(secretLevelValue&&DRAFTSMAN_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':DRAFTSMAN_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "拟稿人" + result.msg);
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






            $('#DRAFTING_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    

    if ($('#DRAFTING_TIME').val() == null||$('#DRAFTING_TIME').val()==''||$('#DRAFTING_TIME').val()==undefined) {
                    $("#DRAFTING_TIME").datepicker("setDate",new Date());
                }

                
            $('#DRAFTING_TIME').attr("readonly","readonly").attr("disabled","disabled");;
                

$("#NO").attr("initvalue",$("input[name='NO']",window.pageParams.content||document).val());
if ($("input[name='NO']",window.pageParams.content||document).val()==''||$("input[name='NO']",window.pageParams.content||document).val()==null||$("input[name='NO']",window.pageParams.content||document).val()==undefined ){

window.NOautocode = new AutoCode('dyjfzkhv2Code',"NO",false,"NO",undefined
	,function(){$("#NO").find("input").attr("style","");}

);


}else{
	$("#NO").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='NO']",window.pageParams.content||document).val();
		var flag = $("input[name='NO']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#NO").attr("initvalue");
		var valuePure = $("#NO").find("#autoCode").val();
		if (flag != "disabled" && window.NOautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=NO',
					type: 'POST',
					async:false,
					data: {
						autoCode: "dyjfzkhv2Code",
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
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=NO',
								type: 'POST',
								async:false,
								data: {
									autoCode: "dyjfzkhv2Code",
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
										formData["NO"] = result.value;
										$("input[name='NO']",window.pageParams.content||document).val(result.value);
										$("#NO").attr("initvalue",result.value);
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
				delete formData["NO"];
				$("input[name='NO']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='NO']",window.pageParams.content||document).val();
		var require = $("#NO").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "NO"){
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
	if (tagId != "NO"){
		return;
	}
	if(operability){
		$("#NO").show();
	}else{
		$("#NO").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "NO"){
		return;
	}
	if (required){
		$("#NO").attr("required","required");
	}
});








$('#DEPT_IDName').on(' focus',function(e){
    DEPT_IDClickFun();
    $(this).blur();
});

function DEPT_IDClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'DEPT_ID',textFiled:'DEPT_IDName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#DEPT_IDButton').off('click');



        if ($('#DEPT_ID').val() == null||$('#DEPT_ID').val()==''||$('#DEPT_ID').val()==undefined) {
$("#DEPT_ID").val(session.deptId);

}
if ($('#DEPT_IDName').val() == null||$('#DEPT_IDName').val()==''||$('#DEPT_IDName').val()==undefined) {
$("#DEPT_IDName").val(session.deptName);
}





if ($("input[name='QUARTER']").val()==''||$("input[name='QUARTER']").val()==null||$("input[name='QUARTER']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{quarter}"
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
	$("#QUARTER").val(macoValue);
}

    if(pageParams.entryId==undefined){
var quar = $("#QUARTER").val();
if(quar!=1){
 $("#QUARTER").val(quar-1);
}else{
 $("#QUARTER").val(4);
} 
}

var INTEGRALTabInitFlag = false;

																				
var dataGridColModel_INTEGRAL =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
         		  		  ,{ label:'姓名', name:'DATA_1', width:15,
		  		            editable : true,
		                  align:'center',
		        edittype:'custom',
	     		  		  sortable:false,
		                            editoptions:{custom_element:dictinaryElem, custom_value:dictinaryValue,rowCount:'20',
      queryStatement:" select t1.idcard,t2.party_name as val,t1.party_id,t1.sex,t1.user_id,t3.name,t4.party_name,t1.attribute_01 from party_member t1 left join party_organization t2 on t1.attribute_01 = t2.id  left join sys_user t3 on t1.user_id = t3.id  left join party_organization t4 on t1.party_id = t4.id where t1.party_id = (select party_id from party_member where user_id = '@{userId}') and t1.status = '1' order by val desc",
      dataGridColModel:'[{"label":"党小组id","width":"50","hidden":true,"align":"center","orderBy":"","name":"ATTRIBUTE_01"},{"label":"身份证号","width":"50","hidden":true,"align":"center","orderBy":"","name":"IDCARD"},{"label":"党支部id","width":"50","hidden":true,"align":"center","orderBy":"","name":"PARTY_ID"},{"label":"性别","width":"50","hidden":true,"align":"center","orderBy":"","name":"SEXName"},{"label":"用户id","width":"50","hidden":true,"align":"center","orderBy":"","name":"USER_ID"},{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"党支部名称","width":"50","align":"center","orderBy":"2","name":"PARTY_NAME"},{"label":"党小组名称","width":"50","align":"center","orderBy":"3","name":"VAL"}]',
      mapping:'[{"name":"ATTRIBUTE_01","targetName":"ATTR1","targetNameName":"党小组id","display":"党小组id","transform":"","lookupType":"","filter":false},{"name":"IDCARD","targetName":"ID_NUMBER","targetNameName":"身份证号","display":"身份证号","transform":"","lookupType":"","filter":false},{"name":"PARTY_ID","targetName":"PARTY_ID","targetNameName":"党支部id","display":"党支部id","transform":"","lookupType":"","filter":false},{"name":"SEXName","targetName":"SEX","targetNameName":"性别","display":"性别","transform":"7","lookupType":"PLATFORM_SEX","filter":false},{"name":"USER_ID","targetName":"USER_ID","targetNameName":"用户id","display":"用户id","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"DATA_1","targetNameName":"姓名","display":"姓名","transform":"","lookupType":"","filter":true},{"name":"PARTY_NAME","targetName":"PARTY_NAME","targetNameName":"党支部名称","display":"党支部名称","transform":"","lookupType":"","filter":false},{"name":"VAL","targetName":"ATTR1VAL","targetNameName":"党小组名称","display":"党小组名称","transform":"","lookupType":"","filter":true}]',
      jsSuccess:'',
      jsBefore:'setdata(selectRows,rowId)',
      jsAfter:'getdata(selectRows,rowId)',
      dataCombox:'-1',
      dataComboxType:'-1',
      detail:'',
      waitSelect:'N',
      isMuti:'Y',
      inputChk:'N',
      dicUniqueCode:'dyjfzkhv2-INTEGRAL-DATA_1'}}
                       ,{ label:'用户id', name: 'USER_ID', width:20,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'性别', name: 'SEX', width:15,
		            editable : false,
		                  align:'center',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'党支部id', name: 'PARTY_ID', width:20,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'党支部名称', name: 'PARTY_NAME', width:30,
		            editable : false,
		                  align:'center',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'党小组id', name: 'ATTR1', width:20,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'党小组名称', name: 'ATTR1VAL', width:20,
		            editable : false,
		                  align:'center',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'身份证号', name: 'ID_NUMBER', width:35,
		            editable : false,
		                  align:'center',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'基础分扣分', name:'FOUNDATIONS', width:20,
		            editable : true,
		                  align:'center',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  											INTEGRALFOUNDATIONSChange(this,e)
					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										if (parseFloat(this.value) < parseFloat(0) ) {
							layer.msg('子表列【基础分扣分】的输入值必须大于等于0',{icon:0});
							this.value = 0;
						}
												  						  if (parseFloat(this.value) > parseFloat(100) ) {
						  layer.msg('子表列【基础分扣分】的输入值必须小于等于100',{icon:0});
							  this.value = 100;
						  }
						  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  , defaultValue: ""}
		  	  }
	                   ,{ label:'基础分扣分备注', name: 'FOUNDATIONS_CONTENT', width:25,
		            editable : true,
		                  align:'center',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'奖励加分', name:'REWARD', width:20,
		            editable : true,
		                  align:'center',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  											INTEGRALREWARDChange(this,e)
					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										if (parseFloat(this.value) < parseFloat(0) ) {
							layer.msg('子表列【奖励加分】的输入值必须大于等于0',{icon:0});
							this.value = 0;
						}
												  						  if (parseFloat(this.value) > parseFloat(100) ) {
						  layer.msg('子表列【奖励加分】的输入值必须小于等于100',{icon:0});
							  this.value = 100;
						  }
						  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  , defaultValue: ""}
		  	  }
	                   ,{ label:'奖励加分备注', name: 'REWARD_CONTENT', width:20,
		            editable : true,
		                  align:'center',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'惩处减分', name:'PUNISH', width:20,
		            editable : true,
		                  align:'center',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  											INTEGRALPUNISHChange(this,e)
					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										if (parseFloat(this.value) < parseFloat(0) ) {
							layer.msg('子表列【惩处减分】的输入值必须大于等于0',{icon:0});
							this.value = 0;
						}
												  						  if (parseFloat(this.value) > parseFloat(100) ) {
						  layer.msg('子表列【惩处减分】的输入值必须小于等于100',{icon:0});
							  this.value = 100;
						  }
						  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  , defaultValue: ""}
		  	  }
	                   ,{ label:'惩处减分备注', name: 'PUNISH_CONTENT', width:20,
		            editable : true,
		                  align:'center',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
               		  ,{label:'履职分', name:'PERSONAL', width:20,
		            editable : true,
		                  align:'center',
		        editrules:{number:true},
		  		  		  sortable:false,
		            editoptions:{dataEvents:[
		  		{
		  			type:'change',fn:function(e){
					  											INTEGRALPERSONALChange(this,e)
					}
		  		},
				{
				    type:'keyup',fn:function(e){
		  										if (parseFloat(this.value) < parseFloat(0) ) {
							layer.msg('子表列【履职分】的输入值必须大于等于0',{icon:0});
							this.value = 0;
						}
												  						  if (parseFloat(this.value) > parseFloat(100) ) {
						  layer.msg('子表列【履职分】的输入值必须小于等于100',{icon:0});
							  this.value = 100;
						  }
						  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  , defaultValue: ""}
		  	  }
	                   ,{ label:'履职分备注', name: 'PERSONAL_CONTENT', width:20,
		            editable : true,
		                  align:'center',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'填写日期', name:'INTEGRAL_DATE', width:40,
		            editable : false,
		                  align:'center',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d', newformat: 'Y-m-d'},
			          editoptions:{custom_element:dateElem,custom_value:dateValue
			 		 }}
                        		  ,{label:'合计得分', name:'INTEGRAL_CONTENT', width:20,
		            editable : false,
		                  align:'center',
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
							layer.msg('子表列【合计得分】的输入值必须大于等于0',{icon:0});
							this.value = 0;
						}
												  		  									}
				},

		  ]},
		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  , defaultValue: ""}
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
                       ,{ label:'使用中字段', name: 'ATTR2', width:20,
		            editable : false,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamINTEGRAL = '{}';


INTEGRALUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                                            if (typeof colname=="undefined" || colname == "" || colname === "FOUNDATIONS" ){
				                }
                    if (typeof colname=="undefined" || colname == "" || colname === "REWARD" ){
				                }
                    if (typeof colname=="undefined" || colname == "" || colname === "PUNISH" ){
				                }
                    if (typeof colname=="undefined" || colname == "" || colname === "PERSONAL" ){
				                }
                        if (typeof colname=="undefined" || colname == "" || colname === "INTEGRAL_CONTENT" ){
				                }
            };

if (window.INTEGRAL_comid == null || window.INTEGRAL_comid == undefined || window.INTEGRAL_comid == '') {
	window.INTEGRAL_comid = id;
}

$('#INTEGRAL').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=INTEGRAL',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.INTEGRAL_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"2c9419a9899b211701899b2cbc0c0349",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_INTEGRAL,
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
	height:"auto",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#INTEGRALnorecords").hide();//隐藏提示信息
    $("#INTEGRALPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#INTEGRAL').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#INTEGRALnorecords").html() == null) {
            $('#INTEGRAL').parent().append("<div class='no_data' style='display: none' id='INTEGRALnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#INTEGRAL').closest('.ui-jqgrid-bdiv').height();
        $("#INTEGRALnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#INTEGRALnorecords img").css("width","120px");
        }else{
            $("#INTEGRALnorecords img").css("width",(height/1.9)+"px");
        }
        $("#INTEGRALnorecords").show();//显示提示信息
        $("#INTEGRALPager_left").css("display", "none");//显示分页信息
    }
    if ($('#INTEGRAL').getGridParam('datatype')!= 'local'){
		// $("#page_saveButton").on("click",function(){
 
// $.ajax({
// url:'platform/avicit/pb/scoring/integral/integralController/lastMap',
// dataType:"json",
// type:"GET",
// async:false,
// data:{
// lcid:pageParams.id,
// json:JSON.stringify($("#INTEGRAL").jqGrid('getRowData'))
// }
 
// })
// })
rowIdarr = [];
	}
},

	    onCellSelect:function(rowid,iCol,cellcontent,e){
		rowId = rowid;
rowIdarrbol= true;
if(rowIdarr.length==0){
 var obj ={
 id:rowId,
 content:parseInt($("#"+rowId+" td:eq(21)").text())
 }
 rowIdarr.push(obj)
 contentVal = parseInt($("#"+rowId+" td:eq(21)").text());
}else{
 for(var i=0;i<rowIdarr.length;i++){
 
 if(rowIdarr[i].id==rowId){
 contentVal = parseInt(rowIdarr[i].content);
 rowIdarrbol = false;
 }
 } 
 if(rowIdarrbol){
 var obj ={
 id:rowId,
 content:parseInt($("#"+rowId+" td:eq(21)").text())
 }
 rowIdarr.push(obj)
 contentVal = parseInt($("#"+rowId+" td:eq(21)").text());
 
 }
 
 
}



    },
	gridComplete: function(){
	var height = $('#INTEGRAL').closest('.ui-jqgrid-bdiv').height();
	$("#INTEGRALnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#INTEGRALnorecords img").css("width","120px");
	}else{
		$("#INTEGRALnorecords img").css("width",(height/1.9)+"px");
	}
																																			},


beforeEditCell:function(){
	$(".datatable").not("#INTEGRAL").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




INTEGRALReload = function(){
	var _isInvalid = true;
	$("#INTEGRAL").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	INTEGRALTabInitFlag = true;
	$('#INTEGRAL').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

INTEGRALTabReload = function(forceFlag){
	if(!INTEGRALTabInitFlag  || forceFlag){
		INTEGRALReload();
	}

}


$('#INTEGRAL').parents('div.ui-jqgrid-bdiv').css("max-height","1000px");

//放入表格toolbar中
$('#t_INTEGRAL').append($('#INTEGRALToolbar'));

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


                                                                        
INTEGRALReload();

/**
 * 表格编辑参数
 */
var newRowIndex_INTEGRAL = 0;
var newRowStart_INTEGRAL = "new_row";


/**
 * 添加页面
 */
insertTableINTEGRAL = function(){
	$('#INTEGRAL').jqGrid('endEditCell');
	$("#INTEGRALnorecords").hide();//隐藏提示信息
	$("#INTEGRALPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_INTEGRAL + newRowIndex_INTEGRAL;
	var parameters = {
		rowID : newRowId,
		initdata : {
																																												FOUNDATIONS:  typeof (0) !== 'undefined'? 0 : '0',
															REWARD:  typeof (0) !== 'undefined'? 0 : '0',
															PUNISH:  typeof (0) !== 'undefined'? 0 : '0',
															PERSONAL:  typeof (0) !== 'undefined'? 0 : '0',
															INTEGRAL_DATE:new Date(),
										INTEGRAL_CONTENT:  typeof (80) !== 'undefined'? 80 : '80',
															ATTR2:  typeof (80) !== 'undefined'? 80 : '80',
						},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#INTEGRAL').jqGrid('addRow', parameters);
	newRowIndex_INTEGRAL++;  
};








$('#INTEGRAL').setGridWidth(700);
$('#INTEGRAL').jqGrid('resizeGrid');



//按钮绑定事件
$('#INTEGRAL_insertBtn').bind('click',function(){
	insertTableINTEGRAL();
});


//自定义按钮绑定事件
																				$('#btn_6').bind('click',function(){
			var rows = [];
	rows = $('#INTEGRAL').jqGrid('getGridParam','selarrrow');
	$('#INTEGRAL').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_Inrow")!=-1){
					$('#INTEGRAL').jqGrid("delRowData", rows[l]); 
				}else if(rows[l].indexOf("new_row")!=-1){
$('#INTEGRAL').jqGrid("delRowData", rows[l]); 
}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=INTEGRAL',
					data: {ids : ids.join(','),formInfoId:'2c9419a9899b211701899b2cbc0c0349',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#INTEGRAL').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
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
		});
			//列onchange事件
											INTEGRALFOUNDATIONSChange = function(_this,e){
		var obj = {
 one :parseInt(e.target.value),
 two:parseInt($("#"+rowId+" td:eq(12)").text()),
 three:parseInt($("#"+rowId+" td:eq(14)").text()),
 fo :parseInt($("#"+rowId+" td:eq(16)").text())
}
var cont = parseInt(contentVal)-obj.one+obj.two-obj.three+obj.fo
$("#"+rowId+" td:eq(19)").text(cont)
    }
					INTEGRALREWARDChange = function(_this,e){
		var obj = {
 one : parseInt($("#"+rowId+" td:eq(10)").text()) ,
 two:parseInt(e.target.value),
 three:parseInt($("#"+rowId+" td:eq(14)").text()),
 fo :parseInt($("#"+rowId+" td:eq(16)").text())
}
var cont = parseInt(contentVal)-obj.one+obj.two-obj.three+obj.fo
$("#"+rowId+" td:eq(19)").text(cont)
    }
					INTEGRALPUNISHChange = function(_this,e){
		var obj = {
 one:parseInt($("#"+rowId+" td:eq(10)").text()) ,
 two:parseInt($("#"+rowId+" td:eq(12)").text()) ,
 three:parseInt(e.target.value),
 fo :parseInt($("#"+rowId+" td:eq(16)").text())
}
var cont = parseInt(contentVal)-obj.one+obj.two-obj.three+obj.fo
$("#"+rowId+" td:eq(19)").text(cont)
    }
					INTEGRALPERSONALChange = function(_this,e){
		var obj = {
 one :parseInt($("#"+rowId+" td:eq(10)").text()) ,
 two:parseInt($("#"+rowId+" td:eq(12)").text()) ,
 three:parseInt($("#"+rowId+" td:eq(14)").text()) ,
 fo : parseInt(e.target.value)
}
var cont = parseInt(contentVal)-obj.one+obj.two-obj.three+obj.fo
$("#"+rowId+" td:eq(19)").text(cont)
    }
						

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "INTEGRAL_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#INTEGRAL_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#INTEGRAL_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#INTEGRAL_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#INTEGRAL_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "INTEGRAL_insertBtn"){
		return;
	}
	if(operability){
		$("#INTEGRAL_insertBtn").css("display","inline-block");
	}else{
		$("#INTEGRAL_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "INTEGRAL_deleteBtn"){
		return;
	}
	if(operability){
		$("#INTEGRAL_deleteBtn").css("display","inline-block");
		var subTableName = "INTEGRAL_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#INTEGRAL_deleteBtn").css("display","none");
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

																									        workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
			if (tagId != "btn_6"){
				return;
			}
			if(operability){
				$("#btn_6").css("display","inline-block");
				$("#"+tagId).parents(".ui-userdata").show();
			}else{
				$("#btn_6").css("display","none");
			}
        });
					
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#INTEGRAL').validateJqGrid("validate");
});

$('#INTEGRAL').validateJqGrid("addValidate","DATA_1","required");
		$('#INTEGRAL').validateJqGrid("addValidate","DATA_1","maxlength",{maxlength:255});
				$('#INTEGRAL').validateJqGrid("addValidate","USER_ID","maxlength",{maxlength:255});
				$('#INTEGRAL').validateJqGrid("addValidate","SEX","maxlength",{maxlength:255});
				$('#INTEGRAL').validateJqGrid("addValidate","PARTY_ID","maxlength",{maxlength:255});
				$('#INTEGRAL').validateJqGrid("addValidate","PARTY_NAME","maxlength",{maxlength:255});
				$('#INTEGRAL').validateJqGrid("addValidate","ATTR1","maxlength",{maxlength:255});
				$('#INTEGRAL').validateJqGrid("addValidate","ATTR1VAL","maxlength",{maxlength:255});
				$('#INTEGRAL').validateJqGrid("addValidate","ID_NUMBER","maxlength",{maxlength:255});
		$('#INTEGRAL').validateJqGrid("addValidate","FOUNDATIONS","required");
		$('#INTEGRAL').validateJqGrid("addValidate","FOUNDATIONS","maxlength",{maxlength:5});
				$('#INTEGRAL').validateJqGrid("addValidate","FOUNDATIONS_CONTENT","maxlength",{maxlength:255});
		$('#INTEGRAL').validateJqGrid("addValidate","REWARD","required");
		$('#INTEGRAL').validateJqGrid("addValidate","REWARD","maxlength",{maxlength:5});
				$('#INTEGRAL').validateJqGrid("addValidate","REWARD_CONTENT","maxlength",{maxlength:255});
		$('#INTEGRAL').validateJqGrid("addValidate","PUNISH","required");
		$('#INTEGRAL').validateJqGrid("addValidate","PUNISH","maxlength",{maxlength:5});
				$('#INTEGRAL').validateJqGrid("addValidate","PUNISH_CONTENT","maxlength",{maxlength:255});
		$('#INTEGRAL').validateJqGrid("addValidate","PERSONAL","required");
		$('#INTEGRAL').validateJqGrid("addValidate","PERSONAL","maxlength",{maxlength:5});
				$('#INTEGRAL').validateJqGrid("addValidate","PERSONAL_CONTENT","maxlength",{maxlength:255});
		$('#INTEGRAL').validateJqGrid("addValidate","INTEGRAL_DATE","required");
		$('#INTEGRAL').validateJqGrid("addValidate","INTEGRAL_DATE","maxlength",{maxlength:255});
				$('#INTEGRAL').validateJqGrid("addValidate","INTEGRAL_CONTENT","maxlength",{maxlength:6});
				$('#INTEGRAL').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
				$('#INTEGRAL').validateJqGrid("addValidate","ATTR2","maxlength",{maxlength:50});
		


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
