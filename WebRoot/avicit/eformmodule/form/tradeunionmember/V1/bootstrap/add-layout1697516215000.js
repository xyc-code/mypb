var attachBpmId;

$(function(){
	



$('#USER_IDName').on(' focus',function(e){

USER_IDClickFun();
this.blur();
});

function USER_IDClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'USER_ID',textFiled:'USER_IDName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var USER_ID_colSecret = $('#');
    var secretLevelValue;
    if(USER_ID_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var USER_ID_selectedList = $('#USER_ID').val();
    var flag = true;
    if(secretLevelValue&&USER_ID_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':USER_ID_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "1姓名ID" + result.msg);
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











	ATTRIBUTE_03DetailCol = 'ATTRIBUTE_03';
	

function ATTRIBUTE_03ClickFun(){
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
				this.setRowATTRIBUTE_03 = function(mapping,rowData){
					

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

						if(ATTRIBUTE_03DetailCol == mapVer.targetName){
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
                , "20","select * from DYN_TRADE_UNION_ORGANIZA",'[{"label":"工会名称","width":"50","align":"center","orderBy":"","name":"LEAGUE_NAME"},{"label":"ID","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"}]','[{"name":"LEAGUE_NAME","targetName":"ATTRIBUTE_03","targetNameName":"工会名称","display":"工会名称","transform":"","lookupType":"","filter":true},{"name":"ID","targetName":"TRADE_UNION_ID","targetNameName":"工会ID","display":"ID","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowATTRIBUTE_03,this.getParamsValue,'','tradeunionmember-ATTRIBUTE_03',this.jsSuccess);


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

						if(ATTRIBUTE_03DetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#ATTRIBUTE_03").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function ATTRIBUTE_03Detail(id){
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


			$('#ATTRIBUTE_03')
	.on(' focus',function(e){
	ATTRIBUTE_03ClickFun();
	this.blur();
});

/*
$('#ATTRIBUTE_03Button').on('click',function(e){
	ATTRIBUTE_03ClickFun();
	this.blur();
});

$('#ATTRIBUTE_03Button').click(function(event) {
   $('#ATTRIBUTE_03').trigger('focus');
});*/










            $('#BIRTHDAY').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#BIRTHDAY_button').click(function(event) {
			/* Act on the event */
	    			 $('#BIRTHDAY').datepicker('show');
			 $('#BIRTHDAY').datepicker().trigger('click');
					
		});
        



            $('#JOIN_PARTY').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#JOIN_PARTY_button').click(function(event) {
			/* Act on the event */
	    			 $('#JOIN_PARTY').datepicker('show');
			 $('#JOIN_PARTY').datepicker().trigger('click');
					
		});
        

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_SEX"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#SEX').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["SEX"] != null && pageParams.formData["SEX"] != ''){    $('#SEX').val(pageParams.formData["SEX"]);}else if($('#SEX').attr("initValue")!=undefined&&$.trim($('#SEX').attr("initValue"))!=''){    $('#SEX').val($('#SEX').attr("initValue"));    pageParams.formData["SEX"] = $('#SEX').attr("initValue");}else{    }}});





$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "TRADE_UNION_EDUCATION"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#EDUCATION_LEVEL').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["EDUCATION_LEVEL"] != null && pageParams.formData["EDUCATION_LEVEL"] != ''){    $('#EDUCATION_LEVEL').val(pageParams.formData["EDUCATION_LEVEL"]);}else if($('#EDUCATION_LEVEL').attr("initValue")!=undefined&&$.trim($('#EDUCATION_LEVEL').attr("initValue"))!=''){    $('#EDUCATION_LEVEL').val($('#EDUCATION_LEVEL').attr("initValue"));    pageParams.formData["EDUCATION_LEVEL"] = $('#EDUCATION_LEVEL').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_POLITICAL"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#POLITICAL_OUTLOOK').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["POLITICAL_OUTLOOK"] != null && pageParams.formData["POLITICAL_OUTLOOK"] != ''){    $('#POLITICAL_OUTLOOK').val(pageParams.formData["POLITICAL_OUTLOOK"]);}else if($('#POLITICAL_OUTLOOK').attr("initValue")!=undefined&&$.trim($('#POLITICAL_OUTLOOK').attr("initValue"))!=''){    $('#POLITICAL_OUTLOOK').val($('#POLITICAL_OUTLOOK').attr("initValue"));    pageParams.formData["POLITICAL_OUTLOOK"] = $('#POLITICAL_OUTLOOK').attr("initValue");}else{    }}});





$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PM_CATEGORY"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#CATEGORY').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["CATEGORY"] != null && pageParams.formData["CATEGORY"] != ''){    $('#CATEGORY').val(pageParams.formData["CATEGORY"]);}else if($('#CATEGORY').attr("initValue")!=undefined&&$.trim($('#CATEGORY').attr("initValue"))!=''){    $('#CATEGORY').val($('#CATEGORY').attr("initValue"));    pageParams.formData["CATEGORY"] = $('#CATEGORY').attr("initValue");}else{    }}});



$('#PARTY_MONEY').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#PARTY_MONEY').trigger('click');
});

$("#PARTY_MONEY").on("keyup",function(){
    if($("#PARTY_MONEY").val()>999999999999999){
        $("#PARTY_MONEY").val(999999999999999);
        layer.msg("17会费金额(季度)最大值为\""+999999999999999+"\"");
    }
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
