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
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   党组织委员分工 
 </div>
 <table style="" id="KzaSXGBaeDf2BjlmqjgAfyR2APBwQUTx" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="SESSION_NAME" class=" " style=";" id="FKC8VfoekuYwUr84tNNTr196i5UIHboo"> 届次： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="SESSION_NAME" name="SESSION_NAME" title="届次" maxlength="225" value="<c:out  value='${map["SESSION_NAME"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="PARTY_NAME" class=" " style=";" id="vChTfr0GAlieMZEsDWdq67tLilxdJjRC"> 党组织名称： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="PARTY_NAME" name="PARTY_NAME" title="党组织名称" maxlength="225" value="<c:out  value='${map["PARTY_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="PARTY_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="SESSION_TYPE" class=" " style=";" id="PfaipyDMKSnqDujqqxnWW6O01zGbBv4Z"> <i class="required">*</i>选举类型： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " required id="SESSION_TYPE" name="SESSION_TYPE" title="选举类型" initvalue="<c:out  value='${map["SESSION_TYPE"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="SESSION_TIME" class=" " style=";" id="wfltZX1wtYIKoZnRWdvORBn70jJYbRnO"> <i class="required">*</i>选举时间： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="选举时间" class="form-control date-picker input-sm" style=";" required id="SESSION_TIME" name="SESSION_TIME" value="${map['SESSION_TIME']}" readonly> 
      <span id="SESSION_TIME_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_NAME" class=" " style=";" id="qkYvCze4pQLppzn5h8E696KOsRyROYzu"> 委员姓名： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="USER_NAME" name="USER_NAME" title="委员姓名" maxlength="50" value="<c:out  value='${map["USER_NAME"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="USER_NAMEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="USER_TYPE" class=" " style=";" id="AY98eTcBdlZ9E6rLo2DEP99WtSwAiegL"> 委员分工： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" required autocomplete="off" id="USER_TYPE" name="USER_TYPE" title="委员分工" maxlength="50" value="<c:out  value='${map["USER_TYPE"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="USER_TYPEButton"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_SEX" class=" " style=";" id="IXIHpnYcOxEpkgHDgz4tx8bPk6uoLows"> 性别： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_SEX" name="USER_SEX" title="性别" maxlength="50" value="<c:out  value='${map["USER_SEX"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="USER_ADD_TIME" class=" " style=";" id="swqXmsyWFU4fL1BGd9cPIIPXK3SaU0fC"> 出生日期： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_ADD_TIME" name="USER_ADD_TIME" title="出生日期" maxlength="50" value="<c:out  value='${map["USER_ADD_TIME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_POST" class=" " style=";" id="GVggQyilnZeftEMQtcsiAIgGJh2Iiu5O"> 职务： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_POST" name="USER_POST" title="职务" maxlength="50" value="<c:out  value='${map["USER_POST"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="USER_RANKS" class=" " style=";" id="w6VhYoWJCiaXq4izG6tnH6hPkfjiTpU6"> 职称： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_RANKS" name="USER_RANKS" title="职称" maxlength="50" value="<c:out  value='${map["USER_RANKS"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_WORK_DATE" class=" " style=";" id="Ktp5LcDZqlA7H1VbCS3CG6Rm7Zka4rIM"> 参加工作时间： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_WORK_DATE" name="USER_WORK_DATE" title="参加工作时间" maxlength="50" value="<c:out  value='${map["USER_WORK_DATE"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="USER_PARTY_TIME" class=" " style=";" id="zJd1hKbpUx5H8Xg4axZws3ZJKIeaCt9H"> 入党时间： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="USER_PARTY_TIME" name="USER_PARTY_TIME" title="入党时间" maxlength="50" value="<c:out  value='${map["USER_PARTY_TIME"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_NUMBER_VOTES" class=" " style=";" id="kEI9w0SG2hJ3XKJNHX7OuT4rm0WHWvJk"> 得票数： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="USER_NUMBER_VOTES" name="USER_NUMBER_VOTES" title="得票数" maxlength="50" value="<c:out  value='${map["USER_NUMBER_VOTES"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="PARTY_ID" class=" " style=";display:none;" id="esQGjqGMG3os3mxRMedOGWRGEaEv1suM"> 党组织id： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="PARTY_ID" name="PARTY_ID" title="党组织id" maxlength="225" value="<c:out  value='${map["PARTY_ID"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="SESSION_ID" class=" " style=";display:none;" id="FFBZDTrXfghfJRzfEYbW12Qe0PjqBDYt"> 届次： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";display:none;" id="SESSION_ID" name="SESSION_ID" data-min="-99999" data-max="99999" data-precision="0" title="届次" maxlength="5" value="<c:out  value='${map["SESSION_ID"]}'/>"> 
      <span class="input-group-addon number-box-act" style="display:none;"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="width:25%;"></td> 
    <td style="width:25%;"></td> 
   </tr> 
   <tr></tr> 
  </tbody> 
 </table>
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
    var formInfoId = "2c908c1d8d5d5e03018d5e0116bf17d8";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_SESSION_WYFG";
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