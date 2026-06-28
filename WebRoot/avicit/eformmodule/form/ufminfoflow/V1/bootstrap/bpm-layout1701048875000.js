var subTableData = {};
var layerflag = true;

var attachBpmInfo = {

    delOrAdd : [],
    editSecret:[]
}
var attachBpmId;
function getLength(str) {
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 3;
    }
    return realLength;
};   

//全局上传状态
var globalUploadNum = 0;
var globalUploadNumTemp = 0;
//上传附件
function attachcallback(id,callback,result) {
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

    });

    var intervalId = setInterval(function () {
        if (globalUploadNumTemp < 0){
            clearInterval(intervalId);
        }
        if (globalUploadNumTemp == globalUploadNum) {
            clearInterval(intervalId);
            //afterEvent();
            if (layerflag && globalUploadNum != 0){
                //layer.msg('附件上传成功！', {icon: 1});
            }
                        pageParams.isInsert = false;

            if (result.startResult){
                callback(result.startResult);
            }else{
                callback();
            }

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

/**
 * 业务操作对象，需继承基础对象，重新必要的业务操作方法
 */
function EformFlow() {
	DefaultForm.call(this);
};
EformFlow.prototype = new DefaultForm();
/**
 * formcode
 */
EformFlow.prototype.formcode = "ufminfoflow";
EformFlow.prototype.isAutoSave = true;
/**
 * 初始化表单数据
 */
EformFlow.prototype.initFormData = function() {
	var _self = this;
};

EformFlow.prototype.afterControlFormInput = function () {
    //ie9 disabled元素样式不生效
    if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<=9){
        $("input[disabled='disabled']").each(function() {
            //$(this).removeAttr("disabled");
            $(this).off("focus").off("keyup");
            $(this).click(function(){return false;});
            $(this).attr("readonly", "readonly");
        });

        $(".select2-hidden-accessible[disabled]").each(function() {
            $(this).prop("disabled", true);
            $(this).select2();
        });
    }
}
/**
 * 启动流程
 * 
 * @param defineId
 * @param callback
 */
EformFlow.prototype.start = function(defineId, callback) {
    //遮罩
    var maskId = layer.load();
	//验证
	var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
         isValidate.showErrors();
//去掉遮罩
layer.close(maskId);
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
        //去掉遮罩
        layer.close(maskId);
		return false;
	}

    if(pageParams.isInsert) {
        
    }
    else {
        
    }

	var _self = this;

    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    jsonData["idmap"] = idmap;
    var tableId = $('#tableId').val();
    var url = 'platform/eform/bpmsCRUDClient/addbpm?formInfoId=2c908c5a896175160189618a328a0662&tableId='+tableId+'&defineId='+defineId+'&formcode='+ _self.formcode;
    beforeSaveEvent.changeData(jsonData);
    avicAjax.ajax({
        url: url,
        data : jsonData,
        type : 'post',
        dataType : 'json',
        success : function(result){
            if (result.success){
                //遮罩
                maskId = layer.load();
                if(typeof(attachcallback) == "function"){
                    layerflag =false;
                    attachcallback(result.id,callback,result);
                }
                pageParams.entryId = result.startResult.entryId;

                afterSaveEvent.exec(jsonData,result);
                if (result.hasOwnProperty("data")){
                	idmap = JSON.stringify(result.data.idMap);
                }
                //刷新子表数据
                $('table.datatable').not(".eform-self-form").each(function(){
                    var tableId = $(this).attr("id");
                    $('#' + tableId).jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
                });

            }else{
                layer.alert(result.msg, {
                    icon: 7
                });
            }
        }
    });
};
/**
 * 自定义元素控制
 **/
//只读控制
EformFlow.prototype.controlSelfElement = function(tagId, operability){

	workflowControl.exec(tagId, operability);
};

//显隐控制
EformFlow.prototype.controlSelfElementForAccess = function(tagId, operability){

    workflowControlForAccess.exec(tagId, operability);
};

//子表按钮显隐控制
EformFlow.prototype.controlSubTableButtonForAccess = function(tagId, operability){
    workflowControlSubTableButtonForAccess.exec(tagId, operability);
};

//必填控制
EformFlow.prototype.controlSelfElementForRequired = function(tagId, operability,obj){

    workflowControlForRequired.exec(tagId, operability,obj);
};

//流程控制-多附件必填
EformFlow.prototype.setAttachRequired = function(tagId,required,obj){
    workflowControlForAttachRequired.exec(tagId,required,obj);
};

//多附件增删控制
EformFlow.prototype.setAttachCanAddOrDel = function(tagId,operability,obj){
    attachBpmInfo.delOrAdd[tagId] = {tagId:tagId,operability:operability,obj:obj};
    if(operability) {
        $('#' + tagId).children('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "");
        });

        $('#' + tagId).find('.attachment_tableDel').show();
        $('#' + tagId).find('div.uploader-file-item').off('mouseover');
    }else {
        $('#' + tagId).children('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "none");
        });

        $('#' + tagId).find('.attachment_tableDel').hide();
        $('#' + tagId).find('div.uploader-file-item').on('mouseover', function () {
            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
        });
    }
};


//多附件密级可编辑
DefaultForm.prototype.setAttachSecretLevelModify = function(tagId,modify,obj){
    attachBpmInfo.editSecret[tagId] = {tagId:tagId,modify:modify,obj:obj};
    var uploadJqgrid = $("#"+tagId+ "_attachmentTable");
    if(modify){
        $("#"+tagId).find("[name='fileSecretLevel']").each(function(i,e){
            $(e).removeAttr("disabled");
        });
        if(uploadJqgrid){
            $("[aria-describedby='"+tagId+"_attachmentTable_attachmentsecretName']").removeClass("not-editable-cell");
        }
    }else{
        $("#"+tagId).find("[name='fileSecretLevel']").each(function(i,e){
            $(e).attr("disabled","disabled");
        });
        if(uploadJqgrid){
            var rowIds = uploadJqgrid.jqGrid("getDataIDs");
            for(var i = 0; i< rowIds.length; i++){
                var rowId = rowIds[i];
                uploadJqgrid.jqGrid('setCell', rowId, "attachmentsecretName", '', 'not-editable-cell');
            }
        }
    }
}



/**
* 控制附件
*/
EformFlow.prototype.setAttachMagic = function(attachMagic) {
    //当流程节点配置是否允许附件功能时候，隐藏上传、下载按钮等
    if(attachMagic) {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "");
        });

        $('div.uploader-file-item').off('mouseover');
    }
    else {
        $('.uploader-panel-heading').each(function (index, element) {
            $(element).find(".uploader-file-picker").css("display", "none");
        });

        $('div.uploader-file-item').on('mouseover', function () {
            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
        })
    }



};
/**
 * 更新数据
 * 
 * @param callback
 */
EformFlow.prototype.save = function(callback) {

    //验证
	var isValidate = $("#form").validate();
    if (!isValidate.checkForm()) {
         isValidate.showErrors();
         return false;
    }

    subTableData = {};
    $('table.datatable').not(".eform-self-form").each(function(){
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
        return false;
    }

    
    var _self = this;

    delete pageParams.formData;
    jsonData["pageParams"] = JSON.stringify(pageParams);
    jsonData["idmap"] = idmap;
    var tableId = $('#tableId').val();
    var url = 'platform/eform/bpmsCRUDClient/bpm?formInfoId=2c908c5a896175160189618a328a0662&tableId='+tableId+'&id='+pageParams.id;
    var saveFlag = beforeSaveEvent.changeData(jsonData);
    if(saveFlag){
        avicAjax.ajax({
            url: url,
            data : jsonData,
            type : 'post',
            dataType : 'json',
            success : function(result){
                if (result.success){
                    if(typeof(attachcallback) == "function"){
                        attachcallback(result.id,callback,result);
                    }
                    afterSaveEvent.exec(jsonData,result);
                    if (result.hasOwnProperty("data")){
                        idmap = JSON.stringify(result.data.idMap);
                    }
                    //刷新子表数据
                    $('table.datatable').not(".eform-self-form").each(function(){
                        var tableId = $(this).attr("id");
                        $('#' + tableId).jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
                    });
                }else{
                    layer.alert(result.msg, {
                        icon: 7
                    });
                }
            }
        });
    }
};

     	             	         
$(function(){
	



	UFMNAMEDetailCol = 'UFMNAME';
	

function UFMNAMEClickFun(){
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
				this.setRowUFMNAME = function(mapping,rowData){
					

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

						if(UFMNAMEDetailCol == mapVer.targetName){
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
                , "20","select su.name,de.dept_id,su.no from sys_user su left join sys_user_dept_position de ON su.id = de.user_id where su.TYPE='0' and su.STATUS='1' and su.LOGIN_NAME NOT IN (select EMPLOYEEID from dyn_ufm_info ) ",'[{"label":"员工号","width":"50","align":"center","orderBy":"","name":"NO"},{"label":"部门","width":"50","align":"center","orderBy":"","name":"DEPT_IDName"},{"label":"部门","width":"50","hidden":true,"align":"center","orderBy":"","name":"DEPT_ID"},{"label":"姓名","width":"50","align":"center","orderBy":"","name":"NAME"}]','[{"name":"NO","targetName":"employeeid","targetNameName":"员工号","display":"员工号","transform":"","lookupType":"","filter":false},{"name":"DEPT_IDName","targetName":"DEPT_NAMEName","targetNameName":"部门名称","display":"部门","transform":"3","lookupType":"","filter":false},{"name":"DEPT_ID","targetName":"DEPT_NAME","targetNameName":"部门名称(值)","display":"部门","transform":"","lookupType":"","filter":false},{"name":"NAME","targetName":"UFMNAME","targetNameName":"姓名","display":"姓名","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowUFMNAME,this.getParamsValue,'','ufminfoflow-UFMNAME',this.jsSuccess);


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

						if(UFMNAMEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#UFMNAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function UFMNAMEDetail(id){
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


			$('#UFMNAME')
	.on(' focus',function(e){
	UFMNAMEClickFun();
	this.blur();
});

/*
$('#UFMNAMEButton').on('click',function(e){
	UFMNAMEClickFun();
	this.blur();
});

$('#UFMNAMEButton').click(function(event) {
   $('#UFMNAME').trigger('focus');
});*/




            $('#employeeid').on('blur',function(e){
            
var code=$('#employeeid').val();
$.ajax({
			 url:"avicit/pb/member/dynUfmInfo/dynUfmInfoController/operation/checkCode?code="+code,
			 dataType:"json",
			 type:"POST",
			 success: function (r) {
 if(r.flag=="failure"){
 layer.alert('员工号已经存在', {
 icon: 7,
 area: ['400px', ''], //宽高
 closeBtn: 0,
 btn: ['关闭'],
 title:"提示"
 }); 	
 $('#employeeid').val("");		
 } 
			 }
			})


        });
        

$("#NEMBER").attr("initvalue",$("input[name='NEMBER']",window.pageParams.content||document).val());
if ($("input[name='NEMBER']",window.pageParams.content||document).val()==''||$("input[name='NEMBER']",window.pageParams.content||document).val()==null||$("input[name='NEMBER']",window.pageParams.content||document).val()==undefined ){

window.NEMBERautocode = new AutoCode('UFM_INFO_CODE',"NEMBER",false,"NEMBER",undefined
	,function(){$("#NEMBER").find("input").attr("style","");}

);


}else{
	$("#NEMBER").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='NEMBER']",window.pageParams.content||document).val();
		var flag = $("input[name='NEMBER']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#NEMBER").attr("initvalue");
		var valuePure = $("#NEMBER").find("#autoCode").val();
		if (flag != "disabled" && window.NEMBERautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=NEMBER',
					type: 'POST',
					async:false,
					data: {
						autoCode: "UFM_INFO_CODE",
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
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=NEMBER',
								type: 'POST',
								async:false,
								data: {
									autoCode: "UFM_INFO_CODE",
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
										formData["NEMBER"] = result.value;
										$("input[name='NEMBER']",window.pageParams.content||document).val(result.value);
										$("#NEMBER").attr("initvalue",result.value);
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
				delete formData["NEMBER"];
				$("input[name='NEMBER']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='NEMBER']",window.pageParams.content||document).val();
		var require = $("#NEMBER").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "NEMBER"){
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
	if (tagId != "NEMBER"){
		return;
	}
	if(operability){
		$("#NEMBER").show();
	}else{
		$("#NEMBER").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "NEMBER"){
		return;
	}
	if (required){
		$("#NEMBER").attr("required","required");
	}
});



            $('#PO_NAME').on('click',function(e){
            
				var selectIndex = layer.open({
			 type: 2,
			 area: ['50%', '50%'],
			 title: '选择父节点',
			 skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
			 maxmin: false, //开启最大化最小化按钮
			 content: 'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationParentSelect',
			 btn: ['确定', '取消'],
			 yes: function(index, layero){
			 	var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
			 	var parentIdContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentId");
			 	var parentNameContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentPartyName");
			 	var selectedNewNode = iframeWin.getSelectedNode();
 var Fathaertext=""; 
 $.ajax({
 url:'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/getTree/3',
 type:"POST",
 async:false, 
 dataType:"JSON",
 success:function(r){
 r = r[0];
 for(var i=0;i<r.children.length;i++){
 var dto = r.children[i]
 if(selectedNewNode.id == dto.id){
 Fathaertext = r.text;
 }
 for(var j =0;j<dto.children.length;j++){
 var dtoChildren = dto.children[j];
 if(selectedNewNode.id == dtoChildren.id){
 Fathaertext = dto.text;
 }
 }
 }
 
 }
 
 })
			 	if (selectedNewNode.attributes.partyCode == '1') {
					
								layer.alert('所选择节点不能是根节点！', {
									icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
								});
					
							return;
						}
						/*var curNodeId = selectedNodes[0].id;
						if (curNodeId === '' || selectedNewNode.attributes.treePath === undefined || selectedNewNode.attributes.treePath === '') {
							layer.alert('所选择父节点不合法，请重新选择！', {
								icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
							});
							return;
						}
						if (selectedNewNode.attributes.treePath.indexOf(curNodeId) >= 0) {
							if (selectedNewNode.id == curNodeId) {
								layer.alert('所选择父节点不能是本节点！', {
									icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
								});
							} else {
								layer.alert('所选择父节点不能是本节点的子节点！', {
									icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
								});
							}
							return;
						}
						$("#poname").val(selectedNewNode.id);
 */
 
 $("#DATA_6").val(selectedNewNode.attributes.partyCode);
						$("#PO_NAME").val(Fathaertext+"--"+selectedNewNode.text);
 
 
						layer.close(layer.index);
						layer.close(selectIndex);
			 },
					btn2: function(index, layero){
					 layer.close(index);
					}
			 });
			
				this.blur();
				nullInput(e);
        });
        



            $('#BIRTHDATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#BIRTHDATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#BIRTHDATE').datepicker('show');
			 $('#BIRTHDATE').datepicker().trigger('click');
					
		});
            
$(document).ready(function(){
 
 $('#BIRTHDATE').on('click',function(){
 var datese = $('.ui-datepicker-year option:eq(0)').text()
 for(var i =0;i<=50;i++){
 var numberdate = parseInt(datese)-i;
 $('.ui-datepicker-year').prepend('<option value="'+numberdate+'">'+numberdate+'</option>');
 
 }
 
 
 })
 
 })









$('#PHONE_NUMBER').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#PHONE_NUMBER').trigger('click');
});

$("#PHONE_NUMBER").on("keyup",function(){
    if($("#PHONE_NUMBER").val()>99999999999){
        $("#PHONE_NUMBER").val(99999999999);
        layer.msg("手机号码最大值为\""+99999999999+"\"");
    }
});





$('#DEPT_NAMEName').on(' focus',function(e){
    DEPT_NAMEClickFun();
    $(this).blur();
});

function DEPT_NAMEClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'DEPT_NAME',textFiled:'DEPT_NAMEName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}









$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_SEX"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#GENDER').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["GENDER"] != null && pageParams.formData["GENDER"] != ''){    $('#GENDER').val(pageParams.formData["GENDER"]);}else if($('#GENDER').attr("initValue")!=undefined&&$.trim($('#GENDER').attr("initValue"))!=''){    $('#GENDER').val($('#GENDER').attr("initValue"));    pageParams.formData["GENDER"] = $('#GENDER').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_POLITICAL"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#POLITICAL_OUTLOOK').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["POLITICAL_OUTLOOK"] != null && pageParams.formData["POLITICAL_OUTLOOK"] != ''){    $('#POLITICAL_OUTLOOK').val(pageParams.formData["POLITICAL_OUTLOOK"]);}else if($('#POLITICAL_OUTLOOK').attr("initValue")!=undefined&&$.trim($('#POLITICAL_OUTLOOK').attr("initValue"))!=''){    $('#POLITICAL_OUTLOOK').val($('#POLITICAL_OUTLOOK').attr("initValue"));    pageParams.formData["POLITICAL_OUTLOOK"] = $('#POLITICAL_OUTLOOK').attr("initValue");}else{    }}});



//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "UF_IDENTITY"){
        return true;
    }
    if(operability){
                        var $tag = $('#UF_IDENTITY1');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY2');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY3');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY4');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY5');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY6');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY7');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY8');
            $tag.removeAttr("disabled");
                                var $tag = $('#UF_IDENTITY9');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "UF_IDENTITY"){
        return;
    }

    if(operability){
        $("#UF_IDENTITY").show();
    }else{
        $("#UF_IDENTITY").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "UF_IDENTITY"){
        return;
    }

    if (required){
        $('input[name="UF_IDENTITY"]').attr("required","required");
    }else{
        $('input[name="UF_IDENTITY"]').removeAttr("required","required");
    }
});








$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_YES_NO_FLAG"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#HO_COMPATRIOTS').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["HO_COMPATRIOTS"] != null && pageParams.formData["HO_COMPATRIOTS"] != ''){    $('#HO_COMPATRIOTS').val(pageParams.formData["HO_COMPATRIOTS"]);}else if($('#HO_COMPATRIOTS').attr("initValue")!=undefined&&$.trim($('#HO_COMPATRIOTS').attr("initValue"))!=''){    $('#HO_COMPATRIOTS').val($('#HO_COMPATRIOTS').attr("initValue"));    pageParams.formData["HO_COMPATRIOTS"] = $('#HO_COMPATRIOTS').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_YES_NO_FLAG"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#HO_DEPENDENTS').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["HO_DEPENDENTS"] != null && pageParams.formData["HO_DEPENDENTS"] != ''){    $('#HO_DEPENDENTS').val(pageParams.formData["HO_DEPENDENTS"]);}else if($('#HO_DEPENDENTS').attr("initValue")!=undefined&&$.trim($('#HO_DEPENDENTS').attr("initValue"))!=''){    $('#HO_DEPENDENTS').val($('#HO_DEPENDENTS').attr("initValue"));    pageParams.formData["HO_DEPENDENTS"] = $('#HO_DEPENDENTS').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_YES_NO_FLAG"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#RO_CHINESE').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["RO_CHINESE"] != null && pageParams.formData["RO_CHINESE"] != ''){    $('#RO_CHINESE').val(pageParams.formData["RO_CHINESE"]);}else if($('#RO_CHINESE').attr("initValue")!=undefined&&$.trim($('#RO_CHINESE').attr("initValue"))!=''){    $('#RO_CHINESE').val($('#RO_CHINESE').attr("initValue"));    pageParams.formData["RO_CHINESE"] = $('#RO_CHINESE').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_YES_NO_FLAG"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#TAIWAN_COMPATRIOTS').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["TAIWAN_COMPATRIOTS"] != null && pageParams.formData["TAIWAN_COMPATRIOTS"] != ''){    $('#TAIWAN_COMPATRIOTS').val(pageParams.formData["TAIWAN_COMPATRIOTS"]);}else if($('#TAIWAN_COMPATRIOTS').attr("initValue")!=undefined&&$.trim($('#TAIWAN_COMPATRIOTS').attr("initValue"))!=''){    $('#TAIWAN_COMPATRIOTS').val($('#TAIWAN_COMPATRIOTS').attr("initValue"));    pageParams.formData["TAIWAN_COMPATRIOTS"] = $('#TAIWAN_COMPATRIOTS').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_YES_NO_FLAG"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#TAIWAN_RELATIVES').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["TAIWAN_RELATIVES"] != null && pageParams.formData["TAIWAN_RELATIVES"] != ''){    $('#TAIWAN_RELATIVES').val(pageParams.formData["TAIWAN_RELATIVES"]);}else if($('#TAIWAN_RELATIVES').attr("initValue")!=undefined&&$.trim($('#TAIWAN_RELATIVES').attr("initValue"))!=''){    $('#TAIWAN_RELATIVES').val($('#TAIWAN_RELATIVES').attr("initValue"));    pageParams.formData["TAIWAN_RELATIVES"] = $('#TAIWAN_RELATIVES').attr("initValue");}else{    }}});





$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_DEGREE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#FUL_EDUCATION').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["FUL_EDUCATION"] != null && pageParams.formData["FUL_EDUCATION"] != ''){    $('#FUL_EDUCATION').val(pageParams.formData["FUL_EDUCATION"]);}else if($('#FUL_EDUCATION').attr("initValue")!=undefined&&$.trim($('#FUL_EDUCATION').attr("initValue"))!=''){    $('#FUL_EDUCATION').val($('#FUL_EDUCATION').attr("initValue"));    pageParams.formData["FUL_EDUCATION"] = $('#FUL_EDUCATION').attr("initValue");}else{    }}});





$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_DEGREE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#PART_EDUCATION').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["PART_EDUCATION"] != null && pageParams.formData["PART_EDUCATION"] != ''){    $('#PART_EDUCATION').val(pageParams.formData["PART_EDUCATION"]);}else if($('#PART_EDUCATION').attr("initValue")!=undefined&&$.trim($('#PART_EDUCATION').attr("initValue"))!=''){    $('#PART_EDUCATION').val($('#PART_EDUCATION').attr("initValue"));    pageParams.formData["PART_EDUCATION"] = $('#PART_EDUCATION').attr("initValue");}else{    }}});



    



	setTimeout(function(){
		$('.attachment_div').each(function (index, element) {
			var eventDiv =  $(element).find("div[id^='rt_rt_']");
        	eventDiv.css("width", "101px");
        	eventDiv.css("height", "32px");

            globalUploadNum++;
    	});
	}, 1000);
	
	$('.date-picker').on('keydown',nullInput);
	$('.time-picker').on('keydown',nullInput);

	                           	
	//创建业务操作JS
    var eformFlow = new EformFlow();
    //创建流程操作JS
    var floweditor = new FlowEditor(eformFlow);

    floweditor.init();

    $('.spinner input').trigger("blur.spinner");

    $(".eform-form-tab").each(function(){
        eformTabReload(this);
        setTabMenu(this);
    });

});