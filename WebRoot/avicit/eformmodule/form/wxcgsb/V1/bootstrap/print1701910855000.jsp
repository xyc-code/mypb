<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form,fileupload,noLoading-mask,tree";
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
   "五小"成果申报 
 </div>
 <table style=" border: 1px solid;" id="fRi1ovHuyRwynJaoKyyoHwh9dhv48zop" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_NO" class=" " style=";" id="lehrnyNJ8SYIWXcVsvYmnAoaHgQPCwez"> 申请编号： </label> </td> 
    <td style="width:34%; border: 1px solid; height: 30px;"> 
     <div id="FIVE_NO" class="bpm_self_class " title="申请编号" style="width:100%;"> 
      <input type="text" class="form-control input-sm" readonly name="FIVE_NO" value="<c:out  value='${map["FIVE_NO"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_NAME" class=" " style=";" id="NIQMNxVQtA1VkNEVhVcByTtgnMRZ59QK"> 提出人姓名： </label> </td> 
    <td style="width:29%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="FIVE_NAME" name="FIVE_NAME" title="提出人姓名" value="<c:out  value='${map["FIVE_NAME"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="FIVE_NAMEName" name="FIVE_NAMEName" required disabled title="提出人姓名" value="<c:out  value='${map["FIVE_NAMEName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="FIVE_NAMEButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_DEPT" class=" " style=";" id="XmFaJqZKukInH7SXhtCTxTPewuWdkOKr"> 单位： </label> </td> 
    <td style="width:34%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="FIVE_DEPT" name="FIVE_DEPT" title="单位" value="<c:out  value='${map["FIVE_DEPT"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="FIVE_DEPTName" name="FIVE_DEPTName" required disabled title="单位" value="<c:out  value='${map["FIVE_DEPTName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="FIVE_DEPTButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="FVIE_AGE" class=" " style=";" id="IHIxC4r4oxmguajZqx5M3mEzds7BZOsq"> <i class="required">*</i>年龄： </label> </td> 
    <td style="width:29%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="FVIE_AGE" name="FVIE_AGE" title="年龄" maxlength="50" value="<c:out  value='${map["FVIE_AGE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_POSITION" class=" " style=";" id="jgIExVHn7nY252dkhajah0VtvV406rMT"> <i class="required">*</i>职位： </label> </td> 
    <td style="width:34%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="FIVE_POSITION" name="FIVE_POSITION" title="职位" maxlength="50" value="<c:out  value='${map["FIVE_POSITION"]}'/>"> 
     </div></td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_DATE" class=" " style=";" id="vBKGbCJhyquG2l9pbHEZrPzchAPToNFJ"> <i class="required">*</i>提出时间： </label> </td> 
    <td style="width:29%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="提出时间" class="form-control date-picker input-sm" style=";" required id="FIVE_DATE" name="FIVE_DATE" value="${map['FIVE_DATE']}" readonly> 
      <span id="FIVE_DATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_PROBLEM" class=" " style=";" id="r1uvFuAItzGnQPwSSVMKp8IZkwYdDkZX"> <i class="required">*</i>问题描述： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"> 
     <div> 
      <div style="height:auto;" id="FIVE_PROBLEM" name="FIVE_PROBLEM" class="bpm_self_class" title="问题描述"><c:out value="${map['FIVE_PROBLEM']}"/></div> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_MEASURES" class=" " style=";" id="z0lh8V0pVP95SkTKcfy9ZyOeh8XIsJpx"> <i class="required">*</i>改善措施： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"> 
     <div> 
      <div style="height:auto;" id="FIVE_MEASURES" name="FIVE_MEASURES" class="bpm_self_class" title="改善措施"><c:out value="${map['FIVE_MEASURES']}"/></div> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_PROSPECTS" class=" " style=";" id="Vo1U83cWO1LBE4PV32EZ4Oy5SVbBR5qJ"> <i class="required">*</i>应用前景： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="3" required id="FIVE_PROSPECTS" name="FIVE_PROSPECTS" placeholder="（200字以内）" title="应用前景" maxlength="4000"><c:out  value="${map['FIVE_PROSPECTS']}"/></div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_EFFECT" class=" " style=";" id="t6I9CZaXdS8IYM1Q8vHn2CUXfz6BeCm6"> <i class="required">*</i>改善效果： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="2" required id="FIVE_EFFECT" name="FIVE_EFFECT" placeholder="（100字以内）" title="改善效果" maxlength="4000"><c:out  value="${map['FIVE_EFFECT']}"/></div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_DECLARATIONS" class=" " style=";" id="j35l92YqYhIjXHbH5NDYeQVovix76dKt"> 申报补充： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"> 
     <div id="E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK" class="attachment_div eform_mutiattach_auth bpm_self_class" title=""> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="POSEN_NAME" class=" " style=";" id="Uf10ikIaqJKy6Eb4tY1fW6B3AAPTQKOn"> <i class="required">*</i>联系人姓名： </label> </td> 
    <td style="width:34%; border: 1px solid; height: 30px;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="POSEN_NAME" name="POSEN_NAME" title="联系人姓名" value="<c:out  value='${map["POSEN_NAME"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="POSEN_NAMEName" name="POSEN_NAMEName" required title="联系人姓名" value="<c:out  value='${map["POSEN_NAMEName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="POSEN_NAMEButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
    <td style="width:18%; text-align: right; border: 1px solid; height: 30px;"><label for="POSEN_TEL" class=" " style=";" id="eD8PS1rb5qbhLxWjNGb3WuRgpX1Xcq7V"> <i class="required">*</i>联系人电话： </label> </td> 
    <td style="width:29%; border: 1px solid; height: 30px;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " required id="POSEN_TEL" name="POSEN_TEL" title="联系人电话" maxlength="50" value="<c:out  value='${map["POSEN_TEL"]}'/>"> 
     </div></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:16%; text-align: right; border: 1px solid; height: 30px;"><label for="FIVE_SITUATION" class=" " style=";" id="WIQx21ZyFeuO8RLGfgnxxm7WhozELwP2"> 评选情况： </label> </td> 
    <td style="width:82%; border: 1px solid; height: 30px;" colspan="3"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " disabled id="FIVE_SITUATION" name="FIVE_SITUATION" title="评选情况" maxlength="50" value="<c:out  value='${map["FIVE_SITUATION"]}'/>"> 
     </div></td> 
   </tr> 
  </tbody> 
 </table>
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
<script src="avicit/platform6/autocode/js/AutoCode.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js?v=${jsversion}"></script>
<script src="static/h5/select2/select2.js?v=${jsversion}"></script>
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
    var formInfoId = "2c908c1d89627f11018962b019e30afb";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_FIVE_OF";
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
        mainTableId: "${maintableId}",
        isInsert: isInsert,
        baseUrl:_eform_base_url,
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

        

$("#FIVE_NO").attr("initvalue",$("input[name='FIVE_NO']",window.pageParams.content||document).val());
if ($("input[name='FIVE_NO']",window.pageParams.content||document).val()==''||$("input[name='FIVE_NO']",window.pageParams.content||document).val()==null||$("input[name='FIVE_NO']",window.pageParams.content||document).val()==undefined ){

window.FIVE_NOautocode = new AutoCode('FIVE_NO',"FIVE_NO",false,"FIVE_NO",undefined
	,function(){$("#FIVE_NO").find("input").attr("style","");}

);


}else{
	$("#FIVE_NO").find("input").attr("style","");
}




beforeSaveEvent.addChangeDataFun(function(formData){
		var codeFlag = true;
		var value = $("input[name='FIVE_NO']",window.pageParams.content||document).val();
		var flag = $("input[name='FIVE_NO']",window.pageParams.content||document).attr("disabled");
		var oldValue = $("#FIVE_NO").attr("initvalue");
		var valuePure = $("#FIVE_NO").find("#autoCode").val();
		if (flag != "disabled" && window.FIVE_NOautocode) {
						var dbtableid = window.pageParams.mainTableId;
						var idJson = $.parseJSON(idmap);
			var comId = window.pageParams.id;
			if (idJson.hasOwnProperty("")){
				comId = idJson[""];
			}
			if (value && valuePure && valuePure != oldValue){
				$.ajax({
					url: 'platform/eform/bpmsCRUDClient/getAutoCode?colname=FIVE_NO',
					type: 'POST',
					async:false,
					data: {
						autoCode: "FIVE_NO",
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
								url: 'platform/eform/bpmsCRUDClient/createNewAutoCode?colname=FIVE_NO',
								type: 'POST',
								async:false,
								data: {
									autoCode: "FIVE_NO",
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
										formData["FIVE_NO"] = result.value;
										$("input[name='FIVE_NO']",window.pageParams.content||document).val(result.value);
										$("#FIVE_NO").attr("initvalue",result.value);
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
				delete formData["FIVE_NO"];
				$("input[name='FIVE_NO']",window.pageParams.content||document).val(valuePure);
			}
			
		}
		return codeFlag;
	});
beforeSaveEvent.addBeforeSaveEvent(function(formData){
		var value = $("input[name='FIVE_NO']",window.pageParams.content||document).val();
		var require = $("#FIVE_NO").attr("required");
		if (require&&require==="required"&&!value){
			layer.alert("设为必填的自动编码字段不能为空！", {
				title: "提示",
				icon: 7
			});
			return false;
		}


	});



workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "FIVE_NO"){
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
	if (tagId != "FIVE_NO"){
		return;
	}
	if(operability){
		$("#FIVE_NO").show();
	}else{
		$("#FIVE_NO").hide();
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "FIVE_NO"){
		return;
	}
	if (required){
		$("#FIVE_NO").attr("required","required");
	}
});

    $("html").height('100%')
$("body").height('100%')




$('#FIVE_NAMEName').on(' focus',function(e){

FIVE_NAMEClickFun();
this.blur();
});

function FIVE_NAMEClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'FIVE_NAME',textFiled:'FIVE_NAMEName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}
    $('#FIVE_NAMEButton').off('click');

if ($('#FIVE_NAME').val() == null||$('#FIVE_NAME').val()==''||$('#FIVE_NAME').val()==undefined) {
    $("#FIVE_NAME").val(session.userId);

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
    $('#FIVE_NAMEAreaName').append($li);
}
if ($('#FIVE_NAMEName').val() == null||$('#FIVE_NAMEName').val()==''||$('#FIVE_NAMEName').val()==undefined) {
$("#FIVE_NAMEName").val(session.userName);
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var FIVE_NAME_colSecret = $('#');
    var secretLevelValue;
    if(FIVE_NAME_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var FIVE_NAME_selectedList = $('#FIVE_NAME').val();
    var flag = true;
    if(secretLevelValue&&FIVE_NAME_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':FIVE_NAME_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "提出人姓名" + result.msg);
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


    






$('#FIVE_DEPTName').on(' focus',function(e){
    FIVE_DEPTClickFun();
    $(this).blur();
});

function FIVE_DEPTClickFun(){

    var defaultOrgId = pageParams.session.orgIndentity;
        var defaultLoadDeptId = "";
        new H5CommonSelect({type:'deptSelect', idFiled:'FIVE_DEPT',textFiled:'FIVE_DEPTName',viewScope:'currentOrg',selectModel:'single'
    ,defaultOrgId:defaultOrgId,defaultLoadDeptId:defaultLoadDeptId
        ,callBack:function(dept){
            }

    });

}

    $('#FIVE_DEPTButton').off('click');



        if ($('#FIVE_DEPT').val() == null||$('#FIVE_DEPT').val()==''||$('#FIVE_DEPT').val()==undefined) {
$("#FIVE_DEPT").val(session.deptId);

}
if ($('#FIVE_DEPTName').val() == null||$('#FIVE_DEPTName').val()==''||$('#FIVE_DEPTName').val()==undefined) {
$("#FIVE_DEPTName").val(session.deptName);
}











            $('#FIVE_DATE').datepicker({
            oneLine:true,
            showButtonPanel:true});
    


    $('#FIVE_DATE_button').click(function(event) {
			/* Act on the event */
	    			 $('#FIVE_DATE').datepicker('show');
			 $('#FIVE_DATE').datepicker().trigger('click');
					
		});
        


beforeSaveEvent.addBeforeSaveEvent(function(formData){
formData["FIVE_PROBLEM"]= window.FIVE_PROBLEM.html();
var textCount=window.FIVE_PROBLEM.count('text');

if(textCount==0)
{
       layer.alert("富文本内容不能为空！", {
	   					title: "提示",
						icon: 7
					});
					return false;
}
});

setTimeout(function(){
window.FIVE_PROBLEM = KindEditor.create('#FIVE_PROBLEM',{
items : [
                                'undo', 'redo', '|', 'preview', 'cut', 'copy', 'paste',
                                'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                                'justifyfull', 'insertorderedlist', 'insertunorderedlist',  'selectall','/', 'image'
                                ,'|','formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                                'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat',  'hr',
                                 '|', 'about'
                        ]
,uploadJson : 'platform/eform/rtfupload/upload/' + id + '/' + 1
,allowImageRemote: true
,allowImageUpload: true
 ,resizeType:0
,filterMode:false
,afterCreate : function() {
	    if(this.html() == ''){
    	this.html("（200字以内）");
    	$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
    }
	this.sync();

　　},
　　afterBlur:function(){
				if(this.html() == ''){
			this.html('（200字以内）');
			$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
		}
		      this.sync();
　　}		,afterFocus:function(e){
			if(this.html() == '（200字以内）'){
			this.html("");
			$($("iframe")[0]).contents().find(".ke-content").css("color","black");
			}
		}
		});

$("#FIVE_PROBLEM").parent().children(".ke-container").find(".ke-statusbar").css("display","none");

jQuery(".ke-container").css("width","100%");
},500);

workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "FIVE_PROBLEM"){
		return;
	}


setTimeout(function(){
var p1 = $("#FIVE_PROBLEM").parent().children(".ke-container");
	if(operability){
		//可编辑
		p1.find(".ke-toolbar").css("display","block");
		p1.css("border","1px solid #CCCCCC");
		window.FIVE_PROBLEM.readonly(false);
	}else{
	    //不可编辑

	    window.FIVE_PROBLEM.readonly();

		p1.find(".ke-toolbar").css("display","none");
		p1.css("border","0");
	}
},800);
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){

if (tagId != "FIVE_PROBLEM"){
		return;
	}
    $("#FIVE_PROBLEM").hide();
	var p1 = $("#"+tagId).parent().children(".ke-container");
	if(operability){
		//可显示
		p1.css("display","inline-block");
	}else{
		//不可显示
		p1.css("display","none");
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "FIVE_PROBLEM"){
		return;
	}
	if (required){
		beforeSaveEvent.addBeforeSaveEvent(function(formData){
			var textCount=window.FIVE_PROBLEM.count('text');
			if(textCount==0)
			{
				layer.alert(obj.tagName+"富文本内容不能为空！", {
					title: "提示",
					icon: 7
				});
				return false;
			}
		});
	}
});




beforeSaveEvent.addBeforeSaveEvent(function(formData){
formData["FIVE_MEASURES"]= window.FIVE_MEASURES.html();
var textCount=window.FIVE_MEASURES.count('text');

if(textCount==0)
{
       layer.alert("富文本内容不能为空！", {
	   					title: "提示",
						icon: 7
					});
					return false;
}
});

setTimeout(function(){
window.FIVE_MEASURES = KindEditor.create('#FIVE_MEASURES',{
items : [
                                'undo', 'redo', '|', 'preview', 'cut', 'copy', 'paste',
                                'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                                'justifyfull', 'insertorderedlist', 'insertunorderedlist',  'selectall','/', 'image'
                                ,'|','formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                                'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat',  'hr',
                                 '|', 'about'
                        ]
,uploadJson : 'platform/eform/rtfupload/upload/' + id + '/' + 1
,allowImageRemote: true
,allowImageUpload: true
 ,resizeType:0
,filterMode:false
,afterCreate : function() {
	    if(this.html() == ''){
    	this.html("（300字以内）");
    	$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
    }
	this.sync();

　　},
　　afterBlur:function(){
				if(this.html() == ''){
			this.html('（300字以内）');
			$($("iframe")[0]).contents().find(".ke-content").css("color","#777");
		}
		      this.sync();
　　}		,afterFocus:function(e){
			if(this.html() == '（300字以内）'){
			this.html("");
			$($("iframe")[0]).contents().find(".ke-content").css("color","black");
			}
		}
		});

$("#FIVE_MEASURES").parent().children(".ke-container").find(".ke-statusbar").css("display","none");

jQuery(".ke-container").css("width","100%");
},500);

workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "FIVE_MEASURES"){
		return;
	}


setTimeout(function(){
var p1 = $("#FIVE_MEASURES").parent().children(".ke-container");
	if(operability){
		//可编辑
		p1.find(".ke-toolbar").css("display","block");
		p1.css("border","1px solid #CCCCCC");
		window.FIVE_MEASURES.readonly(false);
	}else{
	    //不可编辑

	    window.FIVE_MEASURES.readonly();

		p1.find(".ke-toolbar").css("display","none");
		p1.css("border","0");
	}
},800);
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){

if (tagId != "FIVE_MEASURES"){
		return;
	}
    $("#FIVE_MEASURES").hide();
	var p1 = $("#"+tagId).parent().children(".ke-container");
	if(operability){
		//可显示
		p1.css("display","inline-block");
	}else{
		//不可显示
		p1.css("display","none");
	}
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
	if (tagId != "FIVE_MEASURES"){
		return;
	}
	if (required){
		beforeSaveEvent.addBeforeSaveEvent(function(formData){
			var textCount=window.FIVE_MEASURES.count('text');
			if(textCount==0)
			{
				layer.alert(obj.tagName+"富文本内容不能为空！", {
					title: "提示",
					icon: 7
				});
				return false;
			}
		});
	}
});



$("#FIVE_PROSPECTSCount").html((50 - $('#FIVE_PROSPECTS').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+50);
	

function formatFIVE_PROSPECTSLength(text,maxLen){
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



$("#FIVE_EFFECTCount").html((50 - $('#FIVE_EFFECT').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+50);
	

function formatFIVE_EFFECTLength(text,maxLen){
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

setTimeout(function(){
    $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').uploaderExt({
        eformUI: 'bootstrap',
        formId: fileformValue,
        tableName: '',
            afterUpload: afterUploadEvent,
        uploadError:uploadError,
        elementId: 'E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK',
        showType: 'span',
                ready:function(){
            var addOrDelInfo = null;
            if(typeof attachBpmInfo != "undefined" &&  attachBpmInfo!=null && attachBpmInfo != 'undefined'){
                addOrDelInfo = attachBpmInfo.delOrAdd['E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK'];
            }
            if (addOrDelInfo!=null && addOrDelInfo != 'undefined'){
                if(addOrDelInfo.operability) {
                    if('span' == 'span'){
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "");
                        });
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('div.uploader-file-item').unbind("mouseover");
                    }else{
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('.attachment_tableDel').show();
                    }


                }else {
                    if('span' == 'span'){
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').children('.uploader-panel-heading').each(function (index, element) {
                        $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('div.uploader-file-item').bind('mouseover',function(){
                        $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('.attachment_tableDel').hide();
                    }


                }
            }else{
                if(true == true ? false : true){
                    if('span' == 'span'){
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').children('.uploader-panel-heading').each(function (index, element) {
                            $(element).find(".uploader-file-picker").css("display", "none");
                        });
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('div.uploader-file-item').bind('mouseover',function(){
                            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
                        });
                    }else{
                        $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('.attachment_tableDel').hide();
                    }
                }
            }

            var editSecretInfo = attachBpmInfo.editSecret['E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK'];

            if (editSecretInfo!=null && editSecretInfo != 'undefined'){
                if(editSecretInfo.modify){
                    $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).removeAttr("disabled");
                    });
                }else{
                    $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find("[name='fileSecretLevel']").each(function(i,e){
                        $(e).attr("disabled","disabled");
                    });
                }
            }
        },
        
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
},100);

workflowControlForAttachRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK"){
        return;
    }

    if (required){
        $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").attr("required","required");
   }else{
        $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").removeAttr("required");
        $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").removeAttr("aria-required");
   }
});

beforeSaveEvent.addBeforeSaveEvent(function(formData){
    var require = $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").attr("required");
    var bpmRequire = $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").attr("aria-required");
    if ((require&&require === "required") || (bpmRequire&&bpmRequire === "true")){
        var title =  $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").attr("title");
        var itemListNum = 0;
        if('span' == 'span'){
            itemListNum = $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('.uploader-file-item').size();
        }else{
            itemListNum = $('#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK').find('table>>tr.jqgrid-new-row').size();
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
    if (tagId != "E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK"){
        return;
    }
    if(operability){
        $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").show();
    }else{
        $("#E1nX3mhdG6Hneh9tDLEqfzfkDxYEfNKK").hide();
    }
});




$('#POSEN_NAMEName').on(' focus',function(e){

POSEN_NAMEClickFun();
this.blur();
});

function POSEN_NAMEClickFun(){
var secretLevelValue = '';
var defaultOrgId = '';



var defaultLoadDeptId = "";




var defaultLoadRoleId = "";

var defaultLoadGroupId = "";

var defaultLoadPositionId = "";

new H5CommonSelect({secretLevel:secretLevelValue,type:'userSelect',
defaultOrgId:defaultOrgId,

idFiled:'POSEN_NAME',textFiled:'POSEN_NAMEName',viewScope:'currentOrg',selectModel:'single'
,hidTab:[],defaultLoadRoleId:defaultLoadRoleId,defaultLoadDeptId:defaultLoadDeptId
,defaultLoadGroupId:defaultLoadGroupId,defaultLoadPositionId:defaultLoadPositionId

,callBack:function(user){

        
}

});
}




beforeSaveEvent.addBeforeSaveEvent(function(formData){
        var POSEN_NAME_colSecret = $('#');
    var secretLevelValue;
    if(POSEN_NAME_colSecret&&$('#').val()){
        secretLevelValue = $('#').val();
    }
    var POSEN_NAME_selectedList = $('#POSEN_NAME').val();
    var flag = true;
    if(secretLevelValue&&POSEN_NAME_selectedList){
        $.ajax({
            async : false,
            url : 'platform/eform/plugin/checkUserSecret',
            data : {'secretLevelValue' : secretLevelValue,'selectedList':POSEN_NAME_selectedList},
            type : 'post',
            dataType : 'json',
            success : function(result) {
                if(result.msg!=""){
                    layer.msg("选用户控件:" + "联系人姓名" + result.msg);
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






if ($('#FIVE_SITUATION').val() == null||$('#FIVE_SITUATION').val()==''||$('#FIVE_SITUATION').val()==undefined)
$('#FIVE_SITUATION').val("待定");


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