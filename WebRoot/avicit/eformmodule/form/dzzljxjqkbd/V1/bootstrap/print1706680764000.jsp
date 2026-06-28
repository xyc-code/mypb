<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form,tree,fileupload,noLoading-mask";
%>
<!DOCTYPE html>
<HTML>
<head>
    <title>添加</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>"></base>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/eformcss.min.css?v=${jsversion}" />
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/print.css?v=${jsversion}"/>
    <link rel="stylesheet" type="text/css" href="avicit/platform6/eform/formdesign/css/tinymce-content/default.css?v=${jsversion}">
            <link rel="stylesheet" type="text/css" href="avicit/platform6/eform/formdesign/css/tinymce-content/default.css"/>
    </head>
<body>
    <form id='form' onkeydown="if(event.keyCode==13){return event.srcElement.tagName=='TEXTAREA'?true:false;}">

        <div class="mce-content-body1">
 <div class="mce-content-body1"> 
  <div style="text-align: center; font-size: 24px; margin: 15px;">
    党组织历届选举情况 
  </div> 
  <table style="" id="fh9ImbyJGItOJwk3ENQHePjHHLYUlvAd" class="form_commonTable1"> 
   <tbody> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="SESSION_NAME" class=" " style=";" id="N9U27Z9LlPG09J5EKDDcOuu8FXxxPSbT"> <i class="required">*</i>届次： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; " required id="SESSION_NAME" name="SESSION_NAME" title="届次" maxlength="225" value="<c:out  value='${map["SESSION_NAME"]}'/>"> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="PARTY_NAME" class=" " style=";" id="TQraLlmm8QKmlmFWbh8Zvyo3x1AY0err"> 党组织名称： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="PARTY_NAME" name="PARTY_NAME" title="党组织名称" maxlength="225" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
       <span class="input-group-addon dictionary-box-act" id="PARTY_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="PARTY_TYPE" class=" " style=";" id="CYHruMqvNgi7SHVejt4lJYnzqNDvgfxh"> <i class="required">*</i>党组织类型： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " required id="PARTY_TYPE" name="PARTY_TYPE" title="党组织类型" initvalue="<c:out  value='${map["PARTY_TYPE"]}'/>"> <option value="">请选择</option> </select> 
      </div> </td> 
     <td style="width:14%; text-align: right;"><label for="SESSION_TYPE" class=" " style=";" id="m8b6xEwwO35tREYNkEobGLjJdcd8uN0t"> <i class="required">*</i>选举类型： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " required id="SESSION_TYPE" name="SESSION_TYPE" title="选举类型" initvalue="<c:out  value='${map["SESSION_TYPE"]}'/>"> <option value="">请选择</option> </select> 
      </div> </td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="CREA_TIME" class=" " style=";" id="CrtGLhKMhnlOAYAKoC4bra3Q2Y688nB7"> 选举时间/调整时间： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="选举时间调整时间" class="form-control date-picker input-sm" style=";" id="CREA_TIME" name="CREA_TIME" value="${map['CREA_TIME']}" readonly> 
       <span id="CREA_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="CREA_TIME_DATE" class=" " style=";" id="u5ZubLBOgQVntfERXfwBecCpAFLVVzch"> 换届提醒： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="换届提醒" class="form-control date-picker input-sm" style=";" id="CREA_TIME_DATE" name="CREA_TIME_DATE" value="${map['CREA_TIME_DATE']}" readonly> 
       <span id="CREA_TIME_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="CREA_TIME_DATE_TJ" class=" " style=";" id="aAbs38ppwujHhd0D50BOSu7OEMetWHBQ"> 提交换届选举请示 ： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="提交换届选举请示 " class="form-control date-picker input-sm" style=";" id="CREA_TIME_DATE_TJ" name="CREA_TIME_DATE_TJ" value="${map['CREA_TIME_DATE_TJ']}" readonly> 
       <span id="CREA_TIME_DATE_TJ_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="CREA_TIME_DATE_TJYB" class=" " style=";" id="QJjHrshAhFP9J10RLYKTQwtEV5oGH775"> 提交候选人预备人选请示 ： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="提交候选人预备人选请示 " class="form-control date-picker input-sm" style=";" id="CREA_TIME_DATE_TJYB" name="CREA_TIME_DATE_TJYB" value="${map['CREA_TIME_DATE_TJYB']}" readonly> 
       <span id="CREA_TIME_DATE_TJYB_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="ZKDYDH" class=" " style=";" id="uvgNzboTDdTFNOASSTBhh5EI2GGoLLq2"> 召开党员大会： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="召开党员大会" class="form-control date-picker input-sm" style=";" id="ZKDYDH" name="ZKDYDH" value="${map['ZKDYDH']}" readonly> 
       <span id="ZKDYDH_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="JWYCH" class=" " style=";" id="t5CVH3iODgJMjmq7xWX8R2toPMJtY2Ff"> 纪委一次会 ： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="纪委一次会 " class="form-control date-picker input-sm" style=";" id="JWYCH" name="JWYCH" value="${map['JWYCH']}" readonly> 
       <span id="JWYCH_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="WYYCH" class=" " style=";" id="UfN9JowWijPKC4fsGOqnHHHxL4SzMpVs"> 委员会一次会： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group input-group-sm " style="width:100%"> 
       <input type="text" title="委员会一次会" class="form-control date-picker input-sm" style=";" id="WYYCH" name="WYYCH" value="${map['WYYCH']}" readonly> 
       <span id="WYYCH_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="SESSION_JD" class=" " style=";" id="AjT5p8YLCyvM6vsrOeioiFX8LF4nFJMZ"> 选举进度： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group-sm "> 
       <select class="form-control input-sm" style="; " id="SESSION_JD" name="SESSION_JD" title="选举进度" initvalue="<c:out  value='${map["SESSION_JD"]}'/>"> <option value="">请选择</option> </select> 
      </div> </td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="orgjgtzwj" class=" " style=";" id="orgjgtzwjEformLabel"> 组织结构调整文件： </label> </td> 
     <td style="width:14%;"> 
      <div id="orgjgtzwj" class="attachment_div eform_mutiattach_auth bpm_self_class" title="组织结构调整文件："> 
      </div></td> 
     <td style="width:14%; text-align: right;"><label for="ORG_FILE" class=" " style=";display:none;" id="dXI2idVwePW4UIqkEmpSxNLYalJdBA5r"> 组织机构调整文件： </label> </td> 
     <td style="width:14%;"> 
      <div class="input-group-sm "> 
       <input type="text" class="form-control input-sm" style=" ; display:none;" id="ORG_FILE" name="ORG_FILE" title="组织机构调整文件" maxlength="225" value="<c:out  value='${map["ORG_FILE"]}'/>"> 
      </div></td> 
    </tr> 
    <tr> 
     <td style="width:6%; text-align: right;"><label for="PARTY_ORG_CONTENT" class=" " style=";" id="yE3VNRETfZDFPhUw3KXzQBVGfsP2VjvP"> 备注： </label> </td> 
     <td style="width:43%;" colspan="3"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="2" id="PARTY_ORG_CONTENT" name="PARTY_ORG_CONTENT" title="备注" maxlength="255"><c:out  value="${map['PARTY_ORG_CONTENT']}"/></div> </td> 
    </tr> 
   </tbody> 
  </table> 
  <p> </p> 
  <div class="input-group-sm "> 
   <input type="text" class="form-control input-sm" style=" ; display:none;" required id="PARTY_ID" name="PARTY_ID" title="党组织id" maxlength="225" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
  </div> 
  <p></p> 
 </div>
 <p> </p>
 <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
  <input type="text" class="form-control input-sm" style=";display:none;" id="SESSION_ID" name="SESSION_ID" data-min="-99999" data-max="99999" data-precision="0" title="届次" maxlength="5" value="<c:out  value='${map["SESSION_ID"]}'/>"> 
  <span class="input-group-addon number-box-act" style="display:none;"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
 </div>
 <p></p>
 <p></p>
</div>
    </form>
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/eform/formdefine/js/eformCustomDialog.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/common.js?v=${jsversion}"></script>
<script src="avicit/platform6/autocode/js/AutoCode.?v=${jsversion}"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js?v=${jsversion}"></script>
<script src="static/h5/select2/select2.j?v=${jsversion}"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js?v=${jsversion}"></script>

<!-- 富文本的js与css -->
<script src="static/h5/kindeditor/kindeditor-all-min.js?v=${jsversion}"></script>
<script src="static/h5/kindeditor/lang/zh-CN.js?v=${jsversion}"></script>
    <script type="text/javascript">
    //jquery validate允许隐藏域检查
    $.validator.setDefaults({
        ignore: []
    });

    var attachBpmInfo = {

        delOrAdd : [],
        editSecret:[]
    }

    var id = "${comId}";
    var session = $.parseJSON("${session}");
    var dataMap = $.parseJSON("${datamap}");
    var formInfoId = "2c908c1d8d5432ec018d58263cff2d66";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_PARTY_ORG_INFO";
    var type = "${type}";
    var idmap = "${idmap}";
    var parentNodeId = "${parentNodeId}";
    var pNodeIdValue = "${pNodeIdValue}";
    var _eform_base_url = "<%=ViewUtil.getRequestPath(request)%>";

    <c:if test="${empty map}">var isInsert = true;</c:if>
    <c:if test="${!empty map}">var isInsert = false;</c:if>;


    //url属性
    var url = window.location.href;
    var urlParam = {};
    if (url.split("?").length>1) {
        var paramArray = url.split("?")[1].split("&");

        for (var i = 0; i < paramArray.length; i++) {
            var arrayValue = paramArray[i].split("=");
            urlParam[arrayValue[0]] = arrayValue[1];
        }
    }

    var filterParams={};
    //封装全局页面参数，供页面JS调用
    var pageParams = {
        dataSourceId: datasourceId,
        tableName: tableName,
        id: id,
        baseUrl:_eform_base_url,
        mainTableId: "${maintableId}",
        isInsert: isInsert,
        entryId:entryId,
        formData: serializeObject($('#form'),true,'.eform-self-form'),
        urlParam: urlParam,
        session: session,
        version: "${version}"
    };
    $.extend(pageParams,dataMap);
        $(function(){

        $("textarea.input-sm").each(function(e1,e2){
            var actualRows = $(e2).val().split("\n").length;
            var rows = $(e2).attr("rows");
            if(rows == "" || rows == undefined){
                rows = 1;
            }
            if(actualRows == "" || actualRows == undefined){
                actualRows = 1;
            }
            if(actualRows > rows){
                $(e2).attr("rows",actualRows);
            }
        });
        

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

        $(".ke-container").find(".ke-toolbar").css("display","none");

        $(".ke-container").css("border","0");
        $("input[type='hidden']").remove();
        $(".input-group-addon").remove();
        $(".ui-userdata").remove();
        jQuery(".datatable").jqGrid('setGridParam',{'cellEdit':false});

        setTimeout(function() {
            if (type == "print") {
                window.print();
            }else if(type == "export"){
                getpdf();
            }
            window.close();
        }, 1500);

        $('.spinner input').trigger("blur.spinner");

    });

    function getpdf(){
        var head = $('head').html();
        var body = document.getElementById('form').innerHTML;
        opener.htmltopdf(head,body);
    }

    function afterUploadEvent(){
    }

    //附件上传失败后执行
    function uploadError(file, reason){
    }

</script>

</html>