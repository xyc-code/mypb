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
   特色活动 
 </div>
 <table style=" border: 1px solid #000000;" id="JbqcWb3UnklQc0xfUeNop8cysqL8G0Cu" border="1" bordercolor="#000000" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="FL" class=" " style=";" id="AvKx8QaYZ3CmnhS0FSd5E7uQzFfKjlWz"> 分类： </label> </td> 
    <td style="width:26%; border: 1px solid #000000;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="FL" name="FL" title="分类" maxlength="50" value="<c:out  value='${map["FL"]}'/>"> 
     </div></td> 
    <td style="width:13%; text-align: right; border: 1px solid #000000;"><label for="DZZMC" class=" " style=";" id="eC1WLFCfqbSIJ11llRl8dyPntOYxCr6w"> 党组织名称： </label> </td> 
    <td style="width:29%; border: 1px solid #000000;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="DZZMC" name="DZZMC" title="党组织名称" maxlength="50" value="<c:out  value='${map["DZZMC"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="ZZLX" class=" " style=";" id="dw6DIlDI4nb3RaHn1fS5aIvD8y5vjI5e"> 组织类型： </label> </td> 
    <td style="width:26%; border: 1px solid #000000;"> 
     <div class="input-group-sm "> 
      <select class="form-control input-sm" style="; " id="ZZLX" name="ZZLX" title="组织类型" initvalue="<c:out  value='${map["ZZLX"]}'/>"> <option value="">请选择</option> </select> 
     </div> </td> 
    <td style="width:13%; text-align: right; border: 1px solid #000000;"><label for="NOTE" class=" " style=";" id="HdelrRTn3D0pyYRIaD2vIE8S9Bq3SqhO"> 备注： </label> </td> 
    <td style="width:29%; border: 1px solid #000000;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="NOTE" name="NOTE" title="备注" maxlength="50" value="<c:out  value='${map["NOTE"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="HUODONGZHUTName" class=" " style=";" id="I1H9oRaSZ8953ZzjErjWki0uUe2HAs7d"> 活动主题： </label> </td> 
    <td style="width:68%; border: 1px solid #000000;" colspan="3"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; " id="HUODONGZHUT" name="HUODONGZHUT" title="活动主题" maxlength="255" value="<c:out  value='${map["HUODONGZHUT"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="HUODRWJJName" class=" " style=";" id="Dwze2Mjz90IKhKGqqyOzlvgXVKd5XZtj"> 活动任务简介： </label> </td> 
    <td style="width:68%; border: 1px solid #000000;" colspan="3"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="2" id="HUODRWJJ" name="HUODRWJJ" title="活动任务简介" maxlength="4000"><c:out  value="${map['HUODRWJJ']}"/></div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="HUODONGMUBName" class=" " style=";" id="rdDyykP6vz8HdhbGJQNd2wfwQ1tViLjB"> 活动目标： </label> </td> 
    <td style="width:68%; border: 1px solid #000000;" colspan="3"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="2" id="HUODONGMUB" name="HUODONGMUB" title="活动目标" maxlength="4000"><c:out  value="${map['HUODONGMUB']}"/></div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="HUODONGZAITName" class=" " style=";" id="teZAa4KlKIy8ezOQcjZdQXqdoehXrVbO"> 活动载体： </label> </td> 
    <td style="width:68%; border: 1px solid #000000;" colspan="3"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="2" id="HUODONGZAIT" name="HUODONGZAIT" title="活动载体" maxlength="4000"><c:out  value="${map['HUODONGZAIT']}"/></div> </td> 
   </tr> 
   <tr> 
    <td style="width:6%; text-align: right; border: 1px solid #000000;"><label for="请选择" class=" " style=";" id="请选择EformLabel"> 测试： </label> </td> 
    <td style="width:68%; border: 1px solid #000000;" colspan="3"><div style="height:auto;" class="form-control input-sm " style="resize:none;" rows="2" id="CESHI" name="CESHI" title="测试" maxlength="4000"><c:out  value="${map['CESHI']}"/></div> </td> 
   </tr> 
  </tbody> 
 </table>
 <p> </p>
 <div class="input-group-sm "> 
  <input type="text" class="form-control input-sm" style=" ; display:none;" id="LCB_ID" name="LCB_ID" title="里程碑id" maxlength="50" value="<c:out  value='${map["LCB_ID"]}'/>"> 
 </div>
 <p></p>
 <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
  <tbody>
   <tr> 
    <td> 
     <div title="DYN_LCB" id="DYN_LCB_control" class="eform_subtable_bpm_auth"> 
      <div title=""> 
       <table id="DYN_LCB" class="datatable eform_component" datapermission="eform_data_DYN_LCB"></table> 
       <div id="DYN_LCBPager"></div> 
       <div id="DYN_LCBToolbar" class="toolbar"> 
        <div class="toolbar-left"> 
         <a id="DYN_LCB_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class = 'glyphicon glyphicon-plus'></span> 添加</a> 
         <a id="DYN_LCB_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class = 'glyphicon glyphicon-import'></span> 导入</a> 
         <a id="DYN_LCB_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class = 'glyphicon glyphicon-export'></span> 导出</a> 
         <a id="DYN_LCB_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class = 'glyphicon glyphicon-th'></span> 参考录入</a> 
         <a id="DYN_LCB_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class = 'glyphicon glyphicon-trash'></span> 删除</a> 
        </div> 
        <div class="toolbar-right"> 
        </div> 
       </div> 
      </div> 
     </div> </td> 
   </tr> 
  </tbody>
 </table> 
 <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
  <tbody>
   <tr> 
    <td> 
     <div title="DYN_TTESTEXCWL" id="DYN_TTESTEXCWL_control" class="eform_subtable_bpm_auth"> 
      <div title=""> 
       <table id="DYN_TTESTEXCWL" class="datatable eform_component" datapermission="eform_data_DYN_TTESTEXCWL"></table> 
       <div id="DYN_TTESTEXCWLPager"></div> 
       <div id="DYN_TTESTEXCWLToolbar" class="toolbar"> 
        <div class="toolbar-left"> 
         <a id="DYN_TTESTEXCWL_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class = 'glyphicon glyphicon-plus'></span> 添加</a> 
         <a id="DYN_TTESTEXCWL_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class = 'glyphicon glyphicon-import'></span> 导入</a> 
         <a id="DYN_TTESTEXCWL_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class = 'glyphicon glyphicon-export'></span> 导出</a> 
         <a id="DYN_TTESTEXCWL_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class = 'glyphicon glyphicon-th'></span> 参考录入</a> 
         <a id="DYN_TTESTEXCWL_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class = 'glyphicon glyphicon-trash'></span> 删除</a> 
        </div> 
        <div class="toolbar-right"> 
        </div> 
       </div> 
      </div> 
     </div> </td> 
   </tr> 
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
    var formInfoId = "948e83e390a0fe270190a59b7a9f252e";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_TSHD";
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
        





$.ajax({url : 'platform/eform/bpmsClient/getSysLookup.json',data: {lookupCode : "PLATFORM_POLITICAL"},type : 'post',dataType : 'json',async:false,success : function(r) {    for(var i=0;i<r.rows.length;i++){$('#ZZLX').append("<option value=\""+r.rows[i].lookupCode+"\" >"+r.rows[i].lookupName+"</option>")    }    if(pageParams.formData["ZZLX"] != null && pageParams.formData["ZZLX"] != ''){    $('#ZZLX').val(pageParams.formData["ZZLX"]);}else if($('#ZZLX').attr("initValue")!=undefined&&$.trim($('#ZZLX').attr("initValue"))!=''){    $('#ZZLX').val($('#ZZLX').attr("initValue"));    pageParams.formData["ZZLX"] = $('#ZZLX').attr("initValue");}else{    }}});





$("#HUODRWJJCount").html((4000 - $('#HUODRWJJ').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatHUODRWJJLength(text,maxLen){
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



$("#HUODONGMUBCount").html((4000 - $('#HUODONGMUB').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatHUODONGMUBLength(text,maxLen){
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



$("#HUODONGZAITCount").html((4000 - $('#HUODONGZAIT').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatHUODONGZAITLength(text,maxLen){
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



$("#CESHICount").html((4000 - $('#CESHI').val().replace(/[\u0391-\uFFE5]/g,"aa").length)+"/"+4000);
	

function formatCESHILength(text,maxLen){
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


var DYN_LCBTabInitFlag = false;

					
var dataGridColModel_DYN_LCB =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'里程碑计划', name: 'LCBJH', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'计划完成时间', name:'JHWCSJ', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d', newformat: 'Y-m-d'},
			          editoptions:{custom_element:dateElem,custom_value:dateValue
			 		 }}
                                ,{ label:'外键', name: 'WJ_ID', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'活动时间', name:'PARTY_DATE', width:20,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d H:i', newformat: 'Y-m-d H:i'},
			 			            editoptions:{custom_element:timeElem,custom_value:timeValue
			 		 }}
                                ,{ label:'活动地点', name: 'PARTY_ADDRESS', width:20,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
         ]

var extraParamDYN_LCB = '{}';


DYN_LCBUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                    };

if (window.DYN_LCB_comid == null || window.DYN_LCB_comid == undefined || window.DYN_LCB_comid == '') {
	window.DYN_LCB_comid = id;
}

$('#DYN_LCB').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_LCB',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_LCB_comid,fkColName:"WJ_ID",formInfoId:"948e83e390a0fe270190a59b7a9f252e",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_LCB,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
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
	height:"150",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_LCBnorecords").hide();//隐藏提示信息
    $("#DYN_LCBPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_LCB').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_LCBnorecords").html() == null) {
            $('#DYN_LCB').parent().append("<div class='no_data' style='display: none' id='DYN_LCBnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_LCB').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_LCBnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_LCBnorecords img").css("width","120px");
        }else{
            $("#DYN_LCBnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_LCBnorecords").show();//显示提示信息
        $("#DYN_LCBPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_LCB').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_LCBnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_LCBnorecords img").css("width","120px");
	}else{
		$("#DYN_LCBnorecords img").css("width",(height/1.9)+"px");
	}
					},


beforeEditCell:function(){
	$(".datatable").not("#DYN_LCB").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_LCBReload = function(){
	var _isInvalid = true;
	$("#DYN_LCB").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_LCBTabInitFlag = true;
	$('#DYN_LCB').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_LCBTabReload = function(forceFlag){
	if(!DYN_LCBTabInitFlag  || forceFlag){
		DYN_LCBReload();
	}

}


$('#DYN_LCB').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_LCB').append($('#DYN_LCBToolbar'));

    
    
    
    
    


            
DYN_LCBReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_LCB = 0;
var newRowStart_DYN_LCB = "new_row";


/**
 * 添加页面
 */
insertTableDYN_LCB = function(){
	$('#DYN_LCB').jqGrid('endEditCell');
	$("#DYN_LCBnorecords").hide();//隐藏提示信息
	$("#DYN_LCBPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_LCB + newRowIndex_DYN_LCB;
	var parameters = {
		rowID : newRowId,
		initdata : {
																												},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_LCB').jqGrid('addRow', parameters);
	newRowIndex_DYN_LCB++;  
};



/**
 * 删除
 */
deleteTableDYN_LCB = function(){
	var rows = [];
	rows = $('#DYN_LCB').jqGrid('getGridParam','selarrrow');


	$('#DYN_LCB').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_LCB').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_LCB',
					data: {ids : ids.join(','),formInfoId:'948e83e390a0fe270190a59b7a9f252e',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_LCB').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
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
};





$('#DYN_LCB').setGridWidth(700);
$('#DYN_LCB').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_LCB_insertBtn').bind('click',function(){
	insertTableDYN_LCB();
});

//按钮绑定事件
$('#DYN_LCB_deleteBtn').bind('click',function(){
	deleteTableDYN_LCB();
});

//自定义按钮绑定事件
																//列onchange事件
					

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_LCB_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_LCB_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_LCB_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_LCB_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_LCB_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_LCB_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_LCB_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_LCB_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_LCB_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_LCB_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_LCB_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_LCB_deleteBtn").css("display","none");
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

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_LCB').validateJqGrid("validate");
});

		$('#DYN_LCB').validateJqGrid("addValidate","LCBJH","maxlength",{maxlength:255});
						$('#DYN_LCB').validateJqGrid("addValidate","WJ_ID","maxlength",{maxlength:50});
						$('#DYN_LCB').validateJqGrid("addValidate","PARTY_ADDRESS","maxlength",{maxlength:200});
		

var DYN_TTESTEXCWLTabInitFlag = false;

				
var dataGridColModel_DYN_TTESTEXCWL =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'字段2', name: 'DATA_2', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'字段1', name: 'DATA_1', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'外键', name: 'FK_COL_ID', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'时间1', name:'TIME_1', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d H:i', newformat: 'Y-m-d H:i'},
			 			            editoptions:{custom_element:timeElem,custom_value:timeValue
			 		 }}
                  ]

var extraParamDYN_TTESTEXCWL = '{}';


DYN_TTESTEXCWLUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                };

if (window.DYN_TTESTEXCWL_comid == null || window.DYN_TTESTEXCWL_comid == undefined || window.DYN_TTESTEXCWL_comid == '') {
	window.DYN_TTESTEXCWL_comid = id;
}

$('#DYN_TTESTEXCWL').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_TTESTEXCWL',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_TTESTEXCWL_comid,fkColName:"FK_COL_ID",formInfoId:"948e83e390a0fe270190a59b7a9f252e",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_TTESTEXCWL,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
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
	height:"150",
	rowNum : 10000,
	loadonce:true,

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_TTESTEXCWLnorecords").hide();//隐藏提示信息
    $("#DYN_TTESTEXCWLPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_TTESTEXCWL').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_TTESTEXCWLnorecords").html() == null) {
            $('#DYN_TTESTEXCWL').parent().append("<div class='no_data' style='display: none' id='DYN_TTESTEXCWLnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_TTESTEXCWL').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_TTESTEXCWLnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_TTESTEXCWLnorecords img").css("width","120px");
        }else{
            $("#DYN_TTESTEXCWLnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_TTESTEXCWLnorecords").show();//显示提示信息
        $("#DYN_TTESTEXCWLPager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_TTESTEXCWL').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_TTESTEXCWLnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_TTESTEXCWLnorecords img").css("width","120px");
	}else{
		$("#DYN_TTESTEXCWLnorecords img").css("width",(height/1.9)+"px");
	}
				},


beforeEditCell:function(){
	$(".datatable").not("#DYN_TTESTEXCWL").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_TTESTEXCWLReload = function(){
	var _isInvalid = true;
	$("#DYN_TTESTEXCWL").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_TTESTEXCWLTabInitFlag = true;
	$('#DYN_TTESTEXCWL').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_TTESTEXCWLTabReload = function(forceFlag){
	if(!DYN_TTESTEXCWLTabInitFlag  || forceFlag){
		DYN_TTESTEXCWLReload();
	}

}


$('#DYN_TTESTEXCWL').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_TTESTEXCWL').append($('#DYN_TTESTEXCWLToolbar'));

    
    
    
    


            
DYN_TTESTEXCWLReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_TTESTEXCWL = 0;
var newRowStart_DYN_TTESTEXCWL = "new_row";


/**
 * 添加页面
 */
insertTableDYN_TTESTEXCWL = function(){
	$('#DYN_TTESTEXCWL').jqGrid('endEditCell');
	$("#DYN_TTESTEXCWLnorecords").hide();//隐藏提示信息
	$("#DYN_TTESTEXCWLPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_TTESTEXCWL + newRowIndex_DYN_TTESTEXCWL;
	var parameters = {
		rowID : newRowId,
		initdata : {
																							},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_TTESTEXCWL').jqGrid('addRow', parameters);
	newRowIndex_DYN_TTESTEXCWL++;  
};



/**
 * 删除
 */
deleteTableDYN_TTESTEXCWL = function(){
	var rows = [];
	rows = $('#DYN_TTESTEXCWL').jqGrid('getGridParam','selarrrow');


	$('#DYN_TTESTEXCWL').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_TTESTEXCWL').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_TTESTEXCWL',
					data: {ids : ids.join(','),formInfoId:'948e83e390a0fe270190a59b7a9f252e',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_TTESTEXCWL').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
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
};





$('#DYN_TTESTEXCWL').setGridWidth(700);
$('#DYN_TTESTEXCWL').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_TTESTEXCWL_insertBtn').bind('click',function(){
	insertTableDYN_TTESTEXCWL();
});

//按钮绑定事件
$('#DYN_TTESTEXCWL_deleteBtn').bind('click',function(){
	deleteTableDYN_TTESTEXCWL();
});

//自定义按钮绑定事件
																//列onchange事件
				

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_TTESTEXCWL_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_TTESTEXCWL_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_TTESTEXCWL_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_TTESTEXCWL_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_TTESTEXCWL_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_TTESTEXCWL_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_TTESTEXCWL_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_TTESTEXCWL_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_TTESTEXCWL_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_TTESTEXCWL_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_TTESTEXCWL_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_TTESTEXCWL_deleteBtn").css("display","none");
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

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_TTESTEXCWL').validateJqGrid("validate");
});

		$('#DYN_TTESTEXCWL').validateJqGrid("addValidate","DATA_2","maxlength",{maxlength:50});
				$('#DYN_TTESTEXCWL').validateJqGrid("addValidate","DATA_1","maxlength",{maxlength:50});
				$('#DYN_TTESTEXCWL').validateJqGrid("addValidate","FK_COL_ID","maxlength",{maxlength:50});
				



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