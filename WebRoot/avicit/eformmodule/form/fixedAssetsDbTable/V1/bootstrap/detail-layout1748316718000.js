$(function(){
	



            $('#APPLY_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    

    if ($('#APPLY_DATE').val() == null||$('#APPLY_DATE').val()==''||$('#APPLY_DATE').val()==undefined) {
                    $("#APPLY_DATE").datepicker("setDate",new Date());
                }

    $('#APPLY_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#APPLY_DATE').datepicker('show');
			 $('#APPLY_DATE').datepicker().trigger('click');
					
		});
        




$('#APPLY_DEPTName').on(' focus',function(e){
    APPLY_DEPTClickFun();
    $(this).blur();
});

function APPLY_DEPTClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'APPLY_DEPT',textFiled:'APPLY_DEPTName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#APPLY_DEPTButton').off('click');



        if ($('#APPLY_DEPT').val() == null||$('#APPLY_DEPT').val()==''||$('#APPLY_DEPT').val()==undefined) {
$("#APPLY_DEPT").val(session.deptId);

}
if ($('#APPLY_DEPTName').val() == null||$('#APPLY_DEPTName').val()==''||$('#APPLY_DEPTName').val()==undefined) {
$("#APPLY_DEPTName").val(session.deptName);
}







$('#APPLY_JB_USERName').on(' focus',function(e){

APPLY_JB_USERClickFun();
this.blur();
});

function APPLY_JB_USERClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'APPLY_JB_USER',textFiled:'APPLY_JB_USERName',viewScope:'currentOrg',selectModel:'single'
,hidTab:['group', 'role', 'position'],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}

if ($('#APPLY_JB_USER').val() == null||$('#APPLY_JB_USER').val()==''||$('#APPLY_JB_USER').val()==undefined) {
    $("#APPLY_JB_USER").val(session.userId);

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
    $('#APPLY_JB_USERAreaName').append($li);
}
if ($('#APPLY_JB_USERName').val() == null||$('#APPLY_JB_USERName').val()==''||$('#APPLY_JB_USERName').val()==undefined) {
$("#APPLY_JB_USERName").val(session.userName);
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var APPLY_JB_USER_colSecret = $('#');
    var secretLevelValue;
    if(APPLY_JB_USER_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var APPLY_JB_USER_selectedList = $('#APPLY_JB_USER').val();
    var flag = true;
    if(secretLevelValue&&APPLY_JB_USER_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':APPLY_JB_USER_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "经办人" + result.msg);
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






$('#APPLY_USERName').on(' focus',function(e){

APPLY_USERClickFun();
this.blur();
});

function APPLY_USERClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'APPLY_USER',textFiled:'APPLY_USERName',viewScope:'currentOrg',selectModel:'single'
,hidTab:['group', 'role', 'position'],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#APPLY_USERButton').off('click');

if ($('#APPLY_USER').val() == null||$('#APPLY_USER').val()==''||$('#APPLY_USER').val()==undefined) {
    $("#APPLY_USER").val(session.userId);

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
    $('#APPLY_USERAreaName').append($li);
}
if ($('#APPLY_USERName').val() == null||$('#APPLY_USERName').val()==''||$('#APPLY_USERName').val()==undefined) {
$("#APPLY_USERName").val(session.userName);
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var APPLY_USER_colSecret = $('#');
    var secretLevelValue;
    if(APPLY_USER_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var APPLY_USER_selectedList = $('#APPLY_USER').val();
    var flag = true;
    if(secretLevelValue&&APPLY_USER_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':APPLY_USER_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "申请人" + result.msg);
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








	ASSET_CODEDetailCol = 'ASSET_CODE';
	

function ASSET_CODEClickFun(){
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
				this.setRowASSET_CODE = function(mapping,rowData){
					

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

						if(ASSET_CODEDetailCol == mapVer.targetName){
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
                , "20","select * from dyn_fixed_assets_ledger t where t.used_dept_id = '@{departmentId}' and t.data_status='Y' order by t.xh asc",'[{"label":"资产编码","width":"50","align":"center","orderBy":"1","name":"ASSET_CODE"},{"label":"资产名称","width":"50","align":"center","orderBy":"2","name":"ASSET_NAEM"},{"label":"资产品牌","width":"50","align":"center","orderBy":"3","name":"ASSET_BRAND"},{"label":"资产类别","width":"50","align":"center","orderBy":"4","name":"ASSET_TYPEName"},{"label":"资产细目","width":"50","align":"center","orderBy":"5","name":"ASSET_DETAILS"},{"label":"单位","width":"50","align":"center","orderBy":"6","name":"ASSET_DW"},{"label":"型号规格","width":"50","align":"center","orderBy":"7","name":"ASSET_XHGG"},{"label":"资产数量","width":"50","align":"center","orderBy":"8","name":"ASSET_NUM"},{"label":"入账日期","width":"50","hidden":true,"align":"center","orderBy":"9","name":"INSERT_DATE"},{"label":"折旧月份","width":"50","hidden":true,"align":"center","orderBy":"10","name":"DEPRE_DATE"},{"label":"原值","width":"50","align":"center","orderBy":"11","name":"ORIGINAL_VALUE"},{"label":"现值","width":"50","align":"center","orderBy":"12","name":"CURRENT_VALUE"},{"label":"资产id","width":"50","hidden":true,"align":"center","orderBy":"13","name":"ID"},{"label":"资产工会id","width":"50","hidden":true,"align":"center","orderBy":"14","name":"GUILD_ID"},{"label":"资产工会名称","width":"50","hidden":true,"align":"center","orderBy":"15","name":"GUILD_NAME"}]','[{"name":"GUILD_NAME","targetName":"ASSET_GUILD_NAME","targetNameName":"资产工会名称","display":"资产工会名称","transform":"","lookupType":"","filter":false},{"name":"GUILD_ID","targetName":"ASSET_GUILD_ID","targetNameName":"资产工会ID","display":"资产工会id","transform":"","lookupType":"","filter":false},{"name":"ID","targetName":"ASSET_LEDGER_ID","targetNameName":"资产ID","display":"资产id","transform":"","lookupType":"","filter":false},{"name":"ASSET_CODE","targetName":"ASSET_CODE","targetNameName":"资产编码","display":"资产编码","transform":"","lookupType":"","filter":true},{"name":"DEPRE_DATE","targetName":"DEPRE_DATE","targetNameName":"折旧月份","display":"折旧月份","transform":"","lookupType":"","filter":false},{"name":"ORIGINAL_VALUE","targetName":"ORIGINAL_VALUE","targetNameName":"原值","display":"原值","transform":"","lookupType":"","filter":false},{"name":"CURRENT_VALUE","targetName":"CURRENT_VALUE","targetNameName":"现值","display":"现值","transform":"","lookupType":"","filter":false},{"name":"ASSET_NAEM","targetName":"ASSET_NAEM","targetNameName":"资产名称","display":"资产名称","transform":"","lookupType":"","filter":true},{"name":"ASSET_BRAND","targetName":"ASSET_BRAND","targetNameName":"资产品牌","display":"资产品牌","transform":"","lookupType":"","filter":false},{"name":"ASSET_TYPEName","targetName":"ASSET_TYPE","targetNameName":"资产类别","display":"资产类别","transform":"7","lookupType":"GUILD_ASSETS_TYPE","filter":false},{"name":"ASSET_DETAILS","targetName":"ASSET_DETAILS","targetNameName":"资产细目","display":"资产细目","transform":"","lookupType":"","filter":false},{"name":"ASSET_DW","targetName":"ASSET_DW","targetNameName":"单位(值)","display":"单位","transform":"","lookupType":"","filter":false},{"name":"ASSET_XHGG","targetName":"ASSET_XHGG","targetNameName":"型号规格","display":"型号规格","transform":"","lookupType":"","filter":false},{"name":"ASSET_NUM","targetName":"INSERT_NUM","targetNameName":"资产数量","display":"资产数量","transform":"","lookupType":"","filter":false},{"name":"INSERT_DATE","targetName":"INSERT_DATE","targetNameName":"入账日期","display":"入账日期","transform":"","lookupType":"","filter":false}]','-1','-1',this.setRowASSET_CODE,this.getParamsValue,'','fixedAssetsDbTable-ASSET_CODE',this.jsSuccess);


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

						if(ASSET_CODEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#ASSET_CODE").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function ASSET_CODEDetail(id){
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


			$('#ASSET_CODE')
	.on(' focus',function(e){
	ASSET_CODEClickFun();
	this.blur();
});

/*
$('#ASSET_CODEButton').on('click',function(e){
	ASSET_CODEClickFun();
	this.blur();
});

$('#ASSET_CODEButton').click(function(event) {
   $('#ASSET_CODE').trigger('focus');
});*/












    $('#ASSET_DW').attr("disabled","disabled");$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "GUILD_ASSETS_DY_TYPE"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#ASSET_DW').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["ASSET_DW"] != null && pageParams.formData["ASSET_DW"] != ''){    $('#ASSET_DW').val(pageParams.formData["ASSET_DW"]);}else if($('#ASSET_DW').attr("initValue")!=undefined&&$.trim($('#ASSET_DW').attr("initValue"))!=''){    $('#ASSET_DW').val($('#ASSET_DW').attr("initValue"));    pageParams.formData["ASSET_DW"] = $('#ASSET_DW').attr("initValue");}else{    }}});



$('#INSERT_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#INSERT_NUM').trigger('click');
});

$("#INSERT_NUM").on("keyup",function(){
    if($("#INSERT_NUM").val()>99999){
        $("#INSERT_NUM").val(99999);
        layer.msg("资产数量最大值为\""+99999+"\"");
    }
});




            $('#INSERT_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


                
            $('#INSERT_DATE').attr("readonly","readonly").attr("disabled","disabled");;
                



            $('#DEPRE_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


                
            $('#DEPRE_DATE').attr("readonly","readonly").attr("disabled","disabled");;
                

$('#ORIGINAL_VALUE').parent('[data-trigger="spinner"]').spinner();



$('#ORIGINAL_VALUE').blur(function()
{
    $('#ORIGINAL_VALUE').val(formatCurrency($('#ORIGINAL_VALUE').val(), 2));
});

$('#ORIGINAL_VALUE').val(formatCurrency($('#ORIGINAL_VALUE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["ORIGINAL_VALUE"] = $('#ORIGINAL_VALUE').val().replace(reg,"");
    });
}


$('#CURRENT_VALUE').parent('[data-trigger="spinner"]').spinner();



$('#CURRENT_VALUE').blur(function()
{
    $('#CURRENT_VALUE').val(formatCurrency($('#CURRENT_VALUE').val(), 2));
});

$('#CURRENT_VALUE').val(formatCurrency($('#CURRENT_VALUE').val(), 2));




if (typeof addBeforeSaveEvent!='undefined'){
    beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var reg=/,/g;
        formData["CURRENT_VALUE"] = $('#CURRENT_VALUE').val().replace(reg,"");
    });
}





$('#INTO_DEPTName').on(' focus',function(e){
    INTO_DEPTClickFun();
    $(this).blur();
});

function INTO_DEPTClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'INTO_DEPT',textFiled:'INTO_DEPTName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            $('#INTO_DEPT_NAME').val(dept.deptnames);
            }

    });

}









$('#DB_NUM').parent('[data-trigger="spinner"]').spinner();



$('.number-box-act').click(function(event) {
   $('#DB_NUM').trigger('click');
});

$("#DB_NUM").on("keyup",function(){
    if($("#DB_NUM").val()>99999){
        $("#DB_NUM").val(99999);
        layer.msg("调拨数量最大值为\""+99999+"\"");
    }
});
            $('#DB_NUM').on('change',function(e){
            var assetsLedgerNum = $('#INSERT_NUM').val();
if(parseInt(assetsLedgerNum) < parseInt(this.value)){
	layer.msg('调拨数量不能大于资产数量，请重新填写。', {icon: 2, time: 2000});
	$('#DB_NUM').val(1);
}else if(parseInt(assetsLedgerNum) > parseInt(this.value)){
	avicAjax.ajax({
		url : 'platform/avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController/operation/queryFixedAssetsNum',
		data : {
			assetsLedgerId : $('#ASSET_LEDGER_ID').val(),
			assetsLedgerNum: assetsLedgerNum,
			taskId: $('#comId').val(),
			dbNum: this.value
		},
		type : 'POST',
		dataType : 'JSON',
		success : function(result) {
			if(result.flag == 'failure'){
				layer.msg('申请调拨数量大于资产数量，请重新填写。', {icon: 2, time: 2000});
				$('#DB_NUM').val(1);
			}
		}
	});	
}
        });
        



	INTO_GUILD_NAMEDetailCol = 'INTO_GUILD_NAME';
	

function INTO_GUILD_NAMEClickFun(){
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
				this.setRowINTO_GUILD_NAME = function(mapping,rowData){
					

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

						if(INTO_GUILD_NAMEDetailCol == mapVer.targetName){
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
                , "20","select * from dyn_trade_union_organiza t order by t.TREE_LEVEL asc,tree_sort ASC",'[{"label":"工行名称","width":"50","align":"center","orderBy":"1","name":"LEAGUE_NAME"},{"label":"工行ID","width":"50","hidden":true,"align":"center","orderBy":"2","name":"ID"},{"label":"工会类型","width":"50","align":"center","orderBy":"3","name":"ATTRIBUTE_03Name"}]','[{"name":"LEAGUE_NAME","targetName":"INTO_GUILD_NAME","targetNameName":"调入工会","display":"工行名称","transform":"","lookupType":"","filter":true},{"name":"ID","targetName":"INTO_GUILD_ID","targetNameName":"调入工会ID","display":"工行ID","transform":"","lookupType":"","filter":false},{"name":"ATTRIBUTE_03Name","targetName":"","targetNameName":"","display":"工会类型","transform":"7","lookupType":"GH_ORG_TYPE","filter":false}]','-1','-1',this.setRowINTO_GUILD_NAME,this.getParamsValue,'','fixedAssetsDbTable-INTO_GUILD_NAME',this.jsSuccess);


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

						if(INTO_GUILD_NAMEDetailCol == mapVer.targetName){
							detailName = eval("rowData."+ mapVer.name);
						}else if("" == mapVer.targetName){
							detailId = eval("rowData."+ mapVer.name);
						}
					}
				}
	    	 else{
					$("#INTO_GUILD_NAME").val(null);
				}

			
			
			layer.close(index);
	    },
            cancel: function(index, layero){
                layer.close(index);
            },
	
	})
}

function INTO_GUILD_NAMEDetail(id){
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


			$('#INTO_GUILD_NAME')
	.on(' focus',function(e){
	INTO_GUILD_NAMEClickFun();
	this.blur();
});

/*
$('#INTO_GUILD_NAMEButton').on('click',function(e){
	INTO_GUILD_NAMEClickFun();
	this.blur();
});

$('#INTO_GUILD_NAMEButton').click(function(event) {
   $('#INTO_GUILD_NAME').trigger('focus');
});*/




$("#DB_REASONCount").html((4000 - $('#DB_REASON').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatDB_REASONLength(text,maxLen){
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
