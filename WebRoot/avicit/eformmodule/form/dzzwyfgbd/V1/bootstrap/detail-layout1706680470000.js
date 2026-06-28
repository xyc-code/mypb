$(function(){
	

    // $.ajax({
// 			url:"avicit/pb/member/dynPartyOrgInfo/dynPartyOrgInfoController/quary/"+rowData.ID,
// 			dataType:"JSON",
// 			type:"POST",
// 			success:function(item){
// 				$("#SESSION_NAME").val("第"+item.session+"届");
// 				$("#SESSION_ID").val(item.session);
// 			}

// 		});




	PARTY_NAMEDetailCol = 'PARTY_NAME';
	

function PARTY_NAMEClickFun(){
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
				this.setRowPARTY_NAME = function(mapping,rowData){
					

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

						if(PARTY_NAMEDetailCol == mapVer.targetName){
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
                , "20","select t.party_name,t.id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"id","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"},{"label":"党组织名称","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"ID","targetName":"PARTY_ID","targetNameName":"党组织id","display":"id","transform":"","lookupType":"","filter":false},{"name":"PARTY_NAME","targetName":"PARTY_NAME","targetNameName":"党组织名称","display":"党组织名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowPARTY_NAME,this.getParamsValue,'','dzzwyfgbd-PARTY_NAME',this.jsSuccess);


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

						if(PARTY_NAMEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#PARTY_NAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function PARTY_NAMEDetail(id){
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


			$('#PARTY_NAME')
	.on(' focus',function(e){
	PARTY_NAMEClickFun();
	this.blur();
});

/*
$('#PARTY_NAMEButton').on('click',function(e){
	PARTY_NAMEClickFun();
	this.blur();
});

$('#PARTY_NAMEButton').click(function(event) {
   $('#PARTY_NAME').trigger('focus');
});*/




$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "party_xj_type"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#SESSION_TYPE').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["SESSION_TYPE"] != null && pageParams.formData["SESSION_TYPE"] != ''){    $('#SESSION_TYPE').val(pageParams.formData["SESSION_TYPE"]);}else if($('#SESSION_TYPE').attr("initValue")!=undefined&&$.trim($('#SESSION_TYPE').attr("initValue"))!=''){    $('#SESSION_TYPE').val($('#SESSION_TYPE').attr("initValue"));    pageParams.formData["SESSION_TYPE"] = $('#SESSION_TYPE').attr("initValue");}else{    }}});



            $('#SESSION_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#SESSION_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#SESSION_TIME').datepicker('show');
			 $('#SESSION_TIME').datepicker().trigger('click');
					
		});
        



	USER_NAMEDetailCol = 'USER_NAME';
	

function USER_NAMEClickFun(){
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
				this.setRowUSER_NAME = function(mapping,rowData){
					

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

						if(USER_NAMEDetailCol == mapVer.targetName){
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
                , "20","select t.name,t.USER_ID,t.SEX,t.BIRTHDAY,t.POST,t.PROFESSIONAL_RANK,t.JOIN_PARTY,t.WORK_TIME,t.BRANCH_POST from PARTY_MEMBER_ORGANIZATION_VIEW t",'[{"label":"名称","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"性别","width":"50","align":"center","orderBy":"2","name":"SEXName"},{"label":"出生日期","width":"50","align":"center","orderBy":"3","name":"BIRTHDAY"},{"label":"职务","width":"50","align":"center","orderBy":"4","name":"POST"},{"label":"职称","width":"50","align":"center","orderBy":"5","name":"PROFESSIONAL_RANK"},{"label":"入党时间","width":"50","align":"center","orderBy":"6","name":"JOIN_PARTY"},{"label":"参加工作时间","width":"50","align":"center","orderBy":"7","name":"WORK_TIME"}]','[{"name":"WORK_TIME","targetName":"USER_WORK_DATE","targetNameName":"参加工作时间","display":"参加工作时间","transform":"","lookupType":"","filter":false},{"name":"JOIN_PARTY","targetName":"USER_PARTY_TIME","targetNameName":"入党时间","display":"入党时间","transform":"","lookupType":"","filter":false},{"name":"PROFESSIONAL_RANK","targetName":"USER_RANKS","targetNameName":"职称","display":"职称","transform":"","lookupType":"","filter":false},{"name":"POST","targetName":"USER_POST","targetNameName":"职务","display":"职务","transform":"","lookupType":"","filter":false},{"name":"BIRTHDAY","targetName":"USER_ADD_TIME","targetNameName":"出生日期","display":"出生日期","transform":"","lookupType":"","filter":false},{"name":"SEXName","targetName":"USER_SEX","targetNameName":"性别","display":"性别","transform":"7","lookupType":"PLATFORM_SEX","filter":false},{"name":"NAME","targetName":"USER_NAME","targetNameName":"委员姓名","display":"名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowUSER_NAME,this.getParamsValue,'','dzzwyfgbd-USER_NAME',this.jsSuccess);


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

						if(USER_NAMEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#USER_NAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function USER_NAMEDetail(id){
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


			$('#USER_NAME')
	.on(' focus',function(e){
	USER_NAMEClickFun();
	this.blur();
});

/*
$('#USER_NAMEButton').on('click',function(e){
	USER_NAMEClickFun();
	this.blur();
});

$('#USER_NAMEButton').click(function(event) {
   $('#USER_NAME').trigger('focus');
});*/






	USER_TYPEDetailCol = 'USER_TYPE';
	

function USER_TYPEClickFun(){
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
				this.setRowUSER_TYPE = function(mapping,rowData){
					

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

						if(USER_TYPEDetailCol == mapVer.targetName){
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
                , "20","select name from HJ_DYDH_WYFG",'[{"label":"分工","width":"50","align":"center","orderBy":"","name":"NAME"}]','[{"name":"NAME","targetName":"USER_TYPE","targetNameName":"委员分工","display":"分工","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowUSER_TYPE,this.getParamsValue,'','dzzwyfgbd-USER_TYPE',this.jsSuccess);


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

						if(USER_TYPEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#USER_TYPE").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function USER_TYPEDetail(id){
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


			$('#USER_TYPE')
	.on(' focus',function(e){
	USER_TYPEClickFun();
	this.blur();
});

/*
$('#USER_TYPEButton').on('click',function(e){
	USER_TYPEClickFun();
	this.blur();
});

$('#USER_TYPEButton').click(function(event) {
   $('#USER_TYPE').trigger('focus');
});*/




















$('#SESSION_ID').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#SESSION_ID').trigger('click');
});

$("#SESSION_ID").on("keyup",function(){
    if($("#SESSION_ID").val()>99999){
        $("#SESSION_ID").val(99999);
        layer.msg("届次最大值为\""+99999+"\"");
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
