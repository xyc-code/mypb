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
                , "20","select t.party_name,t.id from PARTY_ORGANIZATION t WHERE t.parent_id != '-1' and t.party_name not like '%党小组%'",'[{"label":"id","width":"50","hidden":true,"align":"center","orderBy":"","name":"ID"},{"label":"党组织名称","width":"50","align":"center","orderBy":"","name":"PARTY_NAME"}]','[{"name":"ID","targetName":"PARTY_ID","targetNameName":"党组织id","display":"id","transform":"","lookupType":"","filter":false},{"name":"PARTY_NAME","targetName":"PARTY_NAME","targetNameName":"党组织名称","display":"党组织名称","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowPARTY_NAME,this.getParamsValue,'','dzzljxjqkbd-PARTY_NAME',this.jsSuccess);


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




$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PARTY_ORG_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#PARTY_TYPE').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["PARTY_TYPE"] != null && pageParams.formData["PARTY_TYPE"] != ''){    $('#PARTY_TYPE').val(pageParams.formData["PARTY_TYPE"]);}else if($('#PARTY_TYPE').attr("initValue")!=undefined&&$.trim($('#PARTY_TYPE').attr("initValue"))!=''){    $('#PARTY_TYPE').val($('#PARTY_TYPE').attr("initValue"));    pageParams.formData["PARTY_TYPE"] = $('#PARTY_TYPE').attr("initValue");}else{    }}});

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "party_xj_type"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#SESSION_TYPE').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["SESSION_TYPE"] != null && pageParams.formData["SESSION_TYPE"] != ''){    $('#SESSION_TYPE').val(pageParams.formData["SESSION_TYPE"]);}else if($('#SESSION_TYPE').attr("initValue")!=undefined&&$.trim($('#SESSION_TYPE').attr("initValue"))!=''){    $('#SESSION_TYPE').val($('#SESSION_TYPE').attr("initValue"));    pageParams.formData["SESSION_TYPE"] = $('#SESSION_TYPE').attr("initValue");}else{    }}});



            $('#CREA_TIME').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#CREA_TIME_button').click(function(event) {
			/* Act on the event */
	    			 $('#CREA_TIME').datepicker('show');
			 $('#CREA_TIME').datepicker().trigger('click');
					
		});
        



            $('#CREA_TIME_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#CREA_TIME_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#CREA_TIME_DATE').datepicker('show');
			 $('#CREA_TIME_DATE').datepicker().trigger('click');
					
		});
        



            $('#CREA_TIME_DATE_TJ').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#CREA_TIME_DATE_TJ_button').click(function(event) {
			/* Act on the event */
	    			 $('#CREA_TIME_DATE_TJ').datepicker('show');
			 $('#CREA_TIME_DATE_TJ').datepicker().trigger('click');
					
		});
        



            $('#CREA_TIME_DATE_TJYB').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#CREA_TIME_DATE_TJYB_button').click(function(event) {
			/* Act on the event */
	    			 $('#CREA_TIME_DATE_TJYB').datepicker('show');
			 $('#CREA_TIME_DATE_TJYB').datepicker().trigger('click');
					
		});
        



            $('#ZKDYDH').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#ZKDYDH_button').click(function(event) {
			/* Act on the event */
	    			 $('#ZKDYDH').datepicker('show');
			 $('#ZKDYDH').datepicker().trigger('click');
					
		});
        



            $('#JWYCH').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#JWYCH_button').click(function(event) {
			/* Act on the event */
	    			 $('#JWYCH').datepicker('show');
			 $('#JWYCH').datepicker().trigger('click');
					
		});
        



            $('#WYYCH').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#WYYCH_button').click(function(event) {
			/* Act on the event */
	    			 $('#WYYCH').datepicker('show');
			 $('#WYYCH').datepicker().trigger('click');
					
		});
        

$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "party_org_type"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#SESSION_JD').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["SESSION_JD"] != null && pageParams.formData["SESSION_JD"] != ''){    $('#SESSION_JD').val(pageParams.formData["SESSION_JD"]);}else if($('#SESSION_JD').attr("initValue")!=undefined&&$.trim($('#SESSION_JD').attr("initValue"))!=''){    $('#SESSION_JD').val($('#SESSION_JD').attr("initValue"));    pageParams.formData["SESSION_JD"] = $('#SESSION_JD').attr("initValue");}else{    }}});


attachBpmId =   null  ;

var fileformValue = id;


$('#orgjgtzwj').uploaderExt({
    eformUI: 'bootstrap',
    formId: fileformValue,
    tableName: '',
    afterUpload: afterUploadEvent,
    uploadError:uploadError,
    elementId: 'orgjgtzwj',
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
    formSecret: '',
    accept:
                    ''
        });


workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "orgjgtzwj"){
        return;
    }

    if (required){
        $("#orgjgtzwj").attr("required","required");
   }else{
        $("#orgjgtzwj").removeAttr("required");
        $("#orgjgtzwj").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#orgjgtzwj").attr("required");
    var bpmRequire = $("#orgjgtzwj").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#orgjgtzwj").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#orgjgtzwj').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#orgjgtzwj').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "orgjgtzwj"){
        return;
    }
    if(operability){
        $("#orgjgtzwj").show();
    }else{
        $("#orgjgtzwj").hide();
    }
});


    // $.fn.uploaderExt.defaults.beforeUpload = function (file){
// var fileName = "";
// for(var i=0; i < file.length;i++){
// if(i!=0){fileName+=";"}
// fileName+=file[i].name;
// } 
// $("#ORG_FILE").val(fileName);
// return true;
// }




$("#PARTY_ORG_CONTENTCount").html((255 - $('#PARTY_ORG_CONTENT').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+255);
	

function formatPARTY_ORG_CONTENTLength(text,maxLen){
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
