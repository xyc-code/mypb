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
   工会会员信息表单 
 </div>
 <table style="" id="dNzC0tGs88ooPrxZMNT4sC8nEBHoz6TQ" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="USER_ID" class=" " style=";" id="d5pOh0P3SxGxTS0W6bpfkxqUb4fttC0i"> 姓名： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%;"> 
      <input type="hidden" class="input-sm" id="USER_ID" name="USER_ID" title="1姓名ID" value="<c:out  value='${map["USER_ID"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="USER_IDName" name="USER_IDName" title="1姓名ID" value="<c:out  value='${map["USER_IDName"]}'/>"> 
      <span class="input-group-addon user-box-act" id="USER_IDButton"> <i class="glyphicon glyphicon-user"></i> </span> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="DEPT_ID" class=" " style=";" id="AeDTfOJdiFmCS4r7aB5EijojJcD94Hs6"> 部门： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="hidden" class="input-sm" id="DEPT_ID" name="DEPT_ID" title="2部门ID" value="<c:out  value='${map["DEPT_ID"]}'/>"> 
      <input type="text" class="form-control input-sm" style=" " id="DEPT_IDName" name="DEPT_IDName" title="2部门ID" value="<c:out  value='${map["DEPT_IDName"]}'/>"> 
      <span class="input-group-addon org-box-act" id="DEPT_IDButton"> <i class="glyphicon glyphicon-equalizer"></i> </span> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 工会名称： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="ATTRIBUTE_03" name="ATTRIBUTE_03" title="工会名称" maxlength="255" value="<c:out  value='${map["ATTRIBUTE_03"]}'/>"> 
      <span class="input-group-addon dictionary-box-act" id="ATTRIBUTE_03Button"> <i class="	glyphicon glyphicon-search"></i> </span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="USER_CODE" class=" " style=";" id="AJWLWQ4upo63HPv0zWEQD0sS2SJIFJfW"> 人员编码： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="USER_CODE" name="USER_CODE" title="4人员编码" maxlength="50" value="<c:out  value='${map["USER_CODE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="IDCARD" class=" " style=";" id="o0CKTMfYzKRUNFR6n6bXAOH6Zmsq87zt"> 身份证号： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="IDCARD" name="IDCARD" title="5身份证号" maxlength="255" value="<c:out  value='${map["IDCARD"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="BIRTHDAY" class=" " style=";" id="ntGL30i7MLJr4lVInshSqvHEuNS35JZy"> 出生年月： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="6出行年月" class="form-control date-picker input-sm" style=";" id="BIRTHDAY" name="BIRTHDAY" value="${map['BIRTHDAY']}" readonly> 
      <span id="BIRTHDAY_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="JOIN_PARTY" class=" " style=";" id="Jhh0vdcsxRA9q568JPfkwQUYe8PnYMZF"> 入会时间： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm " style="width:100%"> 
      <input type="text" title="7入会时间" class="form-control date-picker input-sm" style=";" id="JOIN_PARTY" name="JOIN_PARTY" value="${map['JOIN_PARTY']}" readonly> 
      <span id="JOIN_PARTY_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="SEX" class=" " style=";" id="o1wuB6WAqAATHxBuMytkcHilVPn75UsM"> 性别： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="SEX" name="SEX" title="性别" initvalue="<c:out  value='${map["SEX"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="NATION" class=" " style=";" id="kcGXMBqD6uhwrdK0ewu92Fhy0fpeeh8R"> 民族： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="NATION" name="NATION" title="9民族" maxlength="255" value="<c:out  value='${map["NATION"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="ORIGN" class=" " style=";" id="pUyXjIAKVyke4odE48Yew2IcCwcsGZIA"> 籍贯： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="ORIGN" name="ORIGN" title="10籍贯" maxlength="500" value="<c:out  value='${map["ORIGN"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="EDUCATION_LEVEL" class=" " style=";" id="t3EOv7el6vv8dX73duEWCN0WUIPaOboz"> 文化程度： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="EDUCATION_LEVEL" name="EDUCATION_LEVEL" title="11文化程度" initvalue="<c:out  value='${map["EDUCATION_LEVEL"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="POLITICAL_OUTLOOK" class=" " style=";" id="zlHfhgj6gKFqVm6hTOnMEazACB2wOHtO"> 政治面貌： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="POLITICAL_OUTLOOK" name="POLITICAL_OUTLOOK" title="12政治面貌" initvalue="<c:out  value='${map["POLITICAL_OUTLOOK"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="POST" class=" " style=";" id="pzcYsiVA5HgfcZTOXCVU4wVGbjDIl1cR"> 职务： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="POST" name="POST" title="13职务" maxlength="50" value="<c:out  value='${map["POST"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"><label for="PROFESSIONAL_RANK" class=" " style=";" id="pFkJleIUfWRu0HGQzcPZKMJHBF4kV1kQ"> 职称： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="PROFESSIONAL_RANK" name="PROFESSIONAL_RANK" title="14职称" maxlength="50" value="<c:out  value='${map["PROFESSIONAL_RANK"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="CATEGORY" class=" " style=";" id="FkWqfPdPG6Qijt8D2YK9JZQSMEgWxlfX"> 身份类别： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="CATEGORY" name="CATEGORY" title="15身份类别" initvalue="<c:out  value='${map["CATEGORY"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:6%; text-align: right;"><label for="ONOFF_JOB" class=" " style=";" id="Wf4TA85MvvRHD86g1699V43HfjjE4MP7"> 在职/离职： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="ONOFF_JOB" name="ONOFF_JOB" title="16在职/离职"> <option value="">请选择</option> <option value="0" <c:if test="${map['ONOFF_JOB'] eq '0'}">selected</c:if> >在职</option> <option value="1" <c:if test="${map['ONOFF_JOB'] eq '1'}">selected</c:if> >离职</option> <option value="2" <c:if test="${map['ONOFF_JOB'] eq '2'}">selected</c:if> >病假</option> <option value="3" <c:if test="${map['ONOFF_JOB'] eq '3'}">selected</c:if> >产假</option> <option value="4" <c:if test="${map['ONOFF_JOB'] eq '4'}">selected</c:if> >借调外出</option> </select> 
     </div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"><label for="PARTY_MONEY" class=" " style=";" id="LHaSv555OSCu8CQoa6owuXuVAQjMftOh"> 会费金额(季度)： </label> </td> 
    <td style="width:19%;"> 
     <div class="input-group input-group-sm spinner " data-trigger="spinner"> 
      <input type="text" class="form-control input-sm" style=";" id="PARTY_MONEY" name="PARTY_MONEY" data-min="-999999999999999" data-max="999999999999999" data-precision="0" title="17会费金额(季度)" maxlength="38" value="<c:out  value='${map["PARTY_MONEY"]}'/>"> 
      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> 
     </div></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="TRADE_UNION_ID" name="TRADE_UNION_ID" title="工会ID" maxlength="50" value="<c:out  value='${map["TRADE_UNION_ID"]}'/>"> 
     </div></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
    <td style="width:6%; text-align: right;"></td> 
    <td style="width:19%;"></td> 
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
    var formInfoId = "2c908c5a898fafbb01898fd7371f0960";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_TRADE_UNION_MB";
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