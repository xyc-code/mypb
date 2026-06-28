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
 <p style="text-align: center;"><span style="font-size: 24px;">纪检监察工作周报</span></p>
 <table style="" id="Ctoe1IAzUgG2vqdhRedYxizJ1oDPYx7v" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:20%;"><span style="font-family: 微软雅黑;" face="微软雅黑"><span style="font-size: 13px;">申请日期：</span></span></td> 
    <td style="width:20%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="APPLICATION_DATE" name="APPLICATION_DATE" readonly title="申请日期" maxlength="1000" value="<c:out  value='${map["APPLICATION_DATE"]}'/>"> 
     </div></td> 
    <td style="width:25%;"><span style="font-family: 微软雅黑;" face="微软雅黑"><span style="font-size: 13px;"></span></span></td> 
    <td style="width:15%;"><span style="font-family: 微软雅黑;" face="微软雅黑"><span style="font-size: 13px;">申请部门：</span></span></td> 
    <td style="width:20%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="APPLICATION_DEPARTMENT" name="APPLICATION_DEPARTMENT" readonly title="申请部门" maxlength="1000" value="<c:out  value='${map["APPLICATION_DEPARTMENT"]}'/>"> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:20%;"><span style="font-family: 微软雅黑;" face="微软雅黑"><span style="font-size: 13px;">申请人：</span></span></td> 
    <td style="width:20%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";" id="APPLICANT" name="APPLICANT" readonly title="字段_4" maxlength="1000" value="<c:out  value='${map["APPLICANT"]}'/>"> 
     </div></td> 
    <td style="width:25%;"><span style="font-family: 微软雅黑;" face="微软雅黑"><span style="font-size: 13px;"></span></span></td> 
    <td style="width:15%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=" ; display:none;" id="IS_SON" name="IS_SON" title="是什么" maxlength="255" value="<c:out  value='${map["IS_SON"]}'/>"> 
     </div></td> 
    <td style="width:20%;"> 
     <div class="input-group-sm "> 
      <input type="text" class="form-control input-sm" style=";display:none;" id="DEPT_ID" name="DEPT_ID" readonly title="部门ID" maxlength="1000" value="<c:out  value='${map["DEPT_ID"]}'/>"> 
     </div></td> 
   </tr> 
  </tbody> 
 </table>
 <p style="text-align: center;"><label for="请选择" class=" " style=";" id="ZZJH"> <i class="required">*</i>2023年14周周报 </label> </p>
 <p style="text-align: center;"> </p>
 <div id="lastweekly" class="bpm_self_class " title="">
   请输入当前是第几期：
  <input type="text" id="shu">
  <a id="anniu" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth " style=" " role="button" title="确定"> 确定 </a> 
 </div>
 <p></p>
 <p style="text-align: center;"></p>
 <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
  <tbody>
   <tr> 
    <td> 
     <div title="WEEKLY" id="WEEKLY_control" class="eform_subtable_bpm_auth"> 
      <div title=""> 
       <table id="WEEKLY" class="datatable eform_component" datapermission="eform_data_WEEKLY"></table> 
       <div id="WEEKLYPager"></div> 
       <div id="WEEKLYToolbar" class="toolbar"> 
        <div class="toolbar-left"> 
         <a id="WEEKLY_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
         <a id="WEEKLY_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
         <a id="WEEKLY_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
         <a id="WEEKLY_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
         <a id="WEEKLY_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
         <a id="btn_6" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><i class="fa fa-fw fa-upload"></i> 导入</a> 
         <a id="btn_7" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="下载模板" style="display:none;"><i class="fa fa-fw fa-eye"></i> 下载模板</a> 
         <a id="btn_8" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="查询未上报任务" style="display:none;"><i class="fa fa-fw fa-refresh"></i> 查询未上报任务</a> 
        </div> 
        <div class="toolbar-right"> 
        </div> 
       </div> 
      </div> 
     </div> </td> 
   </tr> 
  </tbody>
 </table> 
 <p></p>
 <p style="text-align: center;"><label for="请选择" class="fontsize:18px; " style=";" id="LDJH"> 两个月滚动计划 </label> </p>
 <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
  <tbody>
   <tr> 
    <td> 
     <div title="ROLLING_PLAN" id="ROLLING_PLAN_control" class="eform_subtable_bpm_auth"> 
      <div title=""> 
       <table id="ROLLING_PLAN" class="datatable eform_component" datapermission="eform_data_ROLLING_PLAN"></table> 
       <div id="ROLLING_PLANPager"></div> 
       <div id="ROLLING_PLANToolbar" class="toolbar"> 
        <div class="toolbar-left"> 
         <a id="ROLLING_PLAN_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class = 'glyphicon glyphicon-plus'></span> 添加</a> 
         <a id="ROLLING_PLAN_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class = 'glyphicon glyphicon-import'></span> 导入</a> 
         <a id="ROLLING_PLAN_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class = 'glyphicon glyphicon-export'></span> 导出</a> 
         <a id="ROLLING_PLAN_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class = 'glyphicon glyphicon-th'></span> 参考录入</a> 
         <a id="ROLLING_PLAN_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class = 'glyphicon glyphicon-trash'></span> 删除</a> 
        </div> 
        <div class="toolbar-right"> 
        </div> 
       </div> 
      </div> 
     </div> </td> 
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
        <script src="avicit/weekly/js/WeeklyS.js" type="text/javascript"></script>
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
    var formInfoId = "4028819987207ca4018720c5de1a0524";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_MEEKLY";
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

        if ($("input[name='APPLICATION_DATE']").val()==''||$("input[name='APPLICATION_DATE']").val()==null||$("input[name='APPLICATION_DATE']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{datetime}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#APPLICATION_DATE").val(macoValue);
}

    beforeSaveEvent.addBeforeSaveEvent(function(formData){
         

    });
if ($("input[name='APPLICATION_DEPARTMENT']").val()==''||$("input[name='APPLICATION_DEPARTMENT']").val()==null||$("input[name='APPLICATION_DEPARTMENT']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{departmentName}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#APPLICATION_DEPARTMENT").val(macoValue);
}

if ($("input[name='APPLICANT']").val()==''||$("input[name='APPLICANT']").val()==null||$("input[name='APPLICANT']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{userName}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#APPLICANT").val(macoValue);
}

if ($('#IS_SON').val() == null||$('#IS_SON').val()==''||$('#IS_SON').val()==undefined)
$('#IS_SON').val("1");
if ($("input[name='DEPT_ID']").val()==''||$("input[name='DEPT_ID']").val()==null||$("input[name='DEPT_ID']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{departmentId}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#DEPT_ID").val(macoValue);
}




workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "lastweekly"){
		return;
	}
	if(operability){
		$("#lastweekly").show();
	}else{
		$("#lastweekly").hide();
	}
});

    $("#lastweekly").css('text-align','center');
$("#anniu").on('click',function(){
$.ajax({
url:'platform/avicit/weekly/weeklyController/setLastWeekly',
dataType:"json",
type:"GET",
async:false,
data:{
ltid:pageParams.id,
laskweekly:$("#shu").val()
},
 success:function(data){
 if(data.success == '成功'){
 
 $.ajax({
url:'platform/avicit/weekly/weeklyController/lastWeekly',
dataType:"json",
type:"GET",
async:false,
data:{
ltid:pageParams.id,
 type:'1'
},
 success:function(data){;
$("#ZZJH").text(data.LAST_WEEKLY);
 }
})
 }else{
 layer.alert('修改失败，请先启动流程再修改！', {
								 icon: 7,
								 area: ['400px', ''],
								 closeBtn: 0,
								 btn: ['关闭'],
			 title:"提示"
								}
							);
 }
 }
})
 
 
 
})



var WEEKLYTabInitFlag = false;

					var WEEKLYWORK_CLASSSelect = {"0":"监督检查","1":"执纪问责","2":"巡视巡察","3":"廉洁文化","4":"廉政共建","6":"制度建设","5":"综合事务"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "none"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			WEEKLYWORK_CLASSSelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
														var WEEKLYIS_KEYNOSelect = {"Y":"是","N":"否"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "none"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			WEEKLYIS_KEYNOSelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
								var WEEKLYIS_COMPLETIONSelect = {"Y":"是","N":"否"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "none"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			WEEKLYIS_COMPLETIONSelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
					
var dataGridColModel_WEEKLY =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
               	 ,{ label:'类别Id', name:'WORK_CLASS', width:75, hidden:true}
   	     ,{ label:'类别', name:'WORK_CLASSName', width: 10,
		            editable : false,
		                      align:'center',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter: formatForWEEKLYWORK_CLASS
	  						  	     , editoptions: {	  custom_element:selectElem, custom_value:selectValue, forId:'WORK_CLASS',
   	     value: function(){return WEEKLYWORK_CLASSSelect;}}
	  }
                       ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'工作任务', name: 'WORK_TASKS', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'上周进展', name: 'TOP_DATE_EVOLVE', width:70,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'本周计划', name: 'DATE_EVOLVE', width:70,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'责任人Id', name: 'PERSON_LIABLE', width: 75, hidden:true}
		            ,{ label:'责任人', name:'PERSON_LIABLEName', width:20,
		            editable : false,
		                  align:'left',
		        edittype:'custom',
	     			  			  sortable:false,
			  		  		  	     editoptions:{	  	  selectModel:'multi',
		  	     custom_element:userElem, custom_value:userValue, forId:'PERSON_LIABLE',viewScope:'currentOrg',defaultDeptCol:''}}
		                         ,{ label:'完成节点', name:'COMPLETION_NODE', width:20,
		            editable : false,
		                  align:'center',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d', newformat: 'Y-m-d'},
			          editoptions:{custom_element:dateElem,custom_value:dateValue
			 		 }}
                              	 ,{ label:'是否重要Id', name:'IS_KEYNO', width:75, hidden:true}
   	     ,{ label:'是否重要', name:'IS_KEYNOName', width: 20,
		            editable : false,
		                      align:'left',
		       	 edittype:"custom",
   	                hidden:true,
         		  		  sortable:false,
		     	     formatter:  formatWEEKLYIS_KEYNO
	  						  	     , editoptions: {      callBack:function(e){if(this.value=="Y"){
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="WEEKLY_IS_KEYNOName"]');
elementsByName.style.background="green"
elementsByName.style.color="white"
}else{
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="WEEKLY_IS_KEYNOName"]');
elementsByName.style.background=""
elementsByName.style.color=""
}

},
      	  custom_element:selectElem, custom_value:selectValue, forId:'IS_KEYNO',
   	     value: function(){return WEEKLYIS_KEYNOSelect;}}
	  }
                     	 ,{ label:'是否完成Id', name:'IS_COMPLETION', width:75, hidden:true}
   	     ,{ label:'是否完成', name:'IS_COMPLETIONName', width: 20,
		            editable : false,
		                      align:'left',
		       	 edittype:"custom",
   	                hidden:true,
         		  		  sortable:false,
		     	     formatter: formatForWEEKLYIS_COMPLETION
	  						  	     , editoptions: {      callBack:function(e){if(this.value=="Y"){
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="WEEKLY_IS_COMPLETIONName"]');
elementsByName.style.background="yellow"
elementsByName.style.color="black"
}else{
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="WEEKLY_IS_COMPLETIONName"]');
elementsByName.style.background=""
elementsByName.style.color=""
}},
      	  custom_element:selectElem, custom_value:selectValue, forId:'IS_COMPLETION',
   	     value: function(){return WEEKLYIS_COMPLETIONSelect;}}
	  }
                       ,{ label:'部门IDId', name: 'DEPT_ID', width: 75, hidden:true}
		            ,{ label:'部门ID', name:'DEPT_IDName', width:20,
		            editable : false,
		                  align:'left',
		        edittype:'custom',
	                hidden:true,
         		  		  sortable:false,
		                      	     editoptions:{		  		  selectModel:'single',
		  	     custom_element:deptElem, custom_value:deptValue, forId:'DEPT_ID',viewScope:'currentOrg'}}
	  
                       ,{ label:'备注', name: 'CONTENT', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  ,formatter:formatForWEEKLYCONTENT		  
	  	}
         ]

var extraParamWEEKLY = '{}';


WEEKLYUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                                            };

if (window.WEEKLY_comid == null || window.WEEKLY_comid == undefined || window.WEEKLY_comid == '') {
	window.WEEKLY_comid = id;
}

$('#WEEKLY').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=WEEKLY',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.WEEKLY_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"4028819987207ca4018720c5de1a0524",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_WEEKLY,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	rownumbers: true,
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	pager:WEEKLYPager,
	hasColSet:false,
	hasTabExport:false,
    rowNum: 50,
    rowList:[50, 100, 200, 500],

	shrinkToFit:true,

beforeRequest: function () {
    $("#WEEKLYnorecords").hide();//隐藏提示信息
    $("#WEEKLYPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#WEEKLY').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#WEEKLYnorecords").html() == null) {
            $('#WEEKLY').parent().append("<div class='no_data' style='display: none' id='WEEKLYnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#WEEKLY').closest('.ui-jqgrid-bdiv').height();
        $("#WEEKLYnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#WEEKLYnorecords img").css("width","120px");
        }else{
            $("#WEEKLYnorecords img").css("width",(height/1.9)+"px");
        }
        $("#WEEKLYnorecords").show();//显示提示信息
        $("#WEEKLYPager_left").css("display", "none");//显示分页信息
    }
    if ($('#WEEKLY').getGridParam('datatype')!= 'local'){
		var WEEdata;
function setCell(id,name){

var rowId = $('#'+id).jqGrid('getDataIDs');
var length = rowId.length;
for(var i=0;i<length;i++){
var befire = $("#"+id).jqGrid("getRowData",rowId[i]);
var rowSpanTaxCont = 1;
for(var j =i+1;j<=length;j++){
var end = $("#"+id).jqGrid('getRowData',rowId[j]);
if(befire[name] == end[name]){
rowSpanTaxCont++;
$("#"+id).setCell(rowId[j],name,'1211',{
display:"none"
 });
}else{ 
rowSpanTaxCont=1;
break;
}
 $("#"+id).setCell(rowId[i],name,"","",{rowspan:rowSpanTaxCont,});
}
}
}
// if($("#toolbar").length!=0){
// $("#toolbar").append("<div id='zzfe'></div>")
// var zzfe= document.getElementById("zzfe")
// zzfe.style.width="650px";
// zzfe.style.position="absolute"
// zzfe.style.bottom="0"
// zzfe.style.right="10%"
// zzfe.style.height="60px"
// }

// var pus = [] ;
// $("#zzfe").on("click",function(){
// var endtime=new Date();
// var moth= endtime.getMonth()+2;
// var year= endtime.getFullYear();
// var mothv="";
// var motho=1;
// var mothov="";
// var mos=2;
// var mosv="";
// mothv+=year;
// if(moth<=10){
// mothv+="-";
// mothv+="0";
// mothv+=moth;
// }else {
// mothv+="-"
// mothv+=moth;
// }
// pus.push(mothv)
// motho+=moth;
// if(motho>12){
// motho-=12;
// year++;
// }
// mothov+=year;
// if(motho<=10){
// mothov+="-";
// mothov+="0";
// mothov+=motho;
// }else {
// mothov+="-"
// mothov+=motho;
// }
// pus.push(mothov)
// mos+=moth;
// if(mos>12){
// mos-=12;
// }
// mosv+=year;
// if(mos<=10){
// mosv+="-";
// mosv+="0";
// mosv+=mos;
// }else {
// mosv+="-"
// mosv+=mos;
// }
// pus.push(mosv)
// var arr = $('#ROLLING_PLAN').getCol(3);
// for(var i = 0 ; i<pus.length;i++){
// for (var j=0;j<arr.length;j++){
// if(pus[i]==arr[j]){
// pus.splice(i,1)
// }
// }
// }

// if(pus.length!=0){ 
// layer.alert('请输入最近三个月的滚动计划', {
// 	 icon: 7,	
// 	 area: ['400px', ''], //宽高
// 	 closeBtn: 0,
// 	 btn: ['关闭'],
// 	 title:"提示"
// 	})	;
// }else{
// $("#zzfe").remove();
// document.getElementById("page_saveButton").click();
// }
// })
setCell('WEEKLY','WORK_CLASSName')
function getTime(timestamp) {
 var date = new Date(timestamp );
 Y = date.getFullYear() + '-';
 M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
 D = date.getDate() + ' ';
 h = date.getHours() + ':';
 m = date.getMinutes() + ':';
 s = date.getSeconds();
 return Y+M+D+h+m+s;
 }

$.ajax({
url:'platform/avicit/weekly/weeklyController/lastWeekly',
dataType:"json",
type:"GET",
async:false,
data:{
ltid:pageParams.id,
 type:'1'
},
 success:function(data){
 if(data.LAST_WEEKLY == null || data.LAST_WEEKLY == undefined){
 $("#ZZJH").text("");
 $("#lastweekly").show();
 return;
 }
 $("#lastweekly").hide();
$("#ZZJH").text(data.LAST_WEEKLY);
// $("#LDJH").text(data.LAST_YEEK) ;
 $("#ZZJH").css("font-size","28px");
 $("#LDJH").css("font-size","28px");
 }
})
$.ajax({
 url:'platform/avicit/weekly/weeklyController/weeklySPage',
 dataType:"json",
 type:"GET",
 async:false,
 success:function (data) {
 if($('[aria-describedby="WEEKLY_rn"]').length<=0){
 WEEdata =data.row
 for(var i=0;i<data.row.length;i++) {
 	 $('#WEEKLY').jqGrid('endEditCell');
 	$("#WEEKLYnorecords").hide();//隐藏提示信息
	$("#WEEKLYPager_left").css("display", "block");//隐藏分页信息
 	 var newRowIds =newRowStart_WEEKLY + newRowIndex_WEEKLY;
 	var parameters = {
 			rowID : newRowIds,
 			initdata : {
 				WORK_CLASS:data.row[i].workClass,
 				WORK_TASKS:data.row[i].workTasks,
 				TOP_DATE_EVOLVE:data.row[i].topDateEvolve,
 				DATE_EVOLVE:data.row[i].dateEvolve,
 				PERSON_LIABLE:data.row[i].personLiable,
 				PERSON_LIABLEName:data.row[i].personLiable,
 				COMPLETION_NODE:getTime(data.row[i].completionNode),
 				IS_KEYNO:data.row[i].isKeyno,
 				IS_COMPLETION:data.row[i].isCompletion,
 				DEPT_ID:pageParams.session.deptId,
 				DEPT_IDName:pageParams.session.deptName,
 CONTENT:data.row[i].content
 				},
 			position :"first",
 			useDefValues : true,
 			useFormatter : true,
 			addRowParams : {extraparam:{}}
 		}
 	$('#WEEKLY').jqGrid('addRow', parameters);
 	 var elementById = document.querySelector('#WEEKLY #'+newRowIds);
 	
 
 	 var WEEKLY_IS_KEYNOName = elementById.querySelector('[aria-describedby="WEEKLY_IS_KEYNOName"]');
 	 if(data.row[i].isKeyno=="是"){
 	 WEEKLY_IS_KEYNOName.style.background="green";
 	 WEEKLY_IS_KEYNOName.style.color="white";
 	 }
 	 var WEEKLY_IS_COMPLETIONName = elementById.querySelector('[aria-describedby="WEEKLY_IS_COMPLETIONName"]');
 	 if(data.row[i].isCompletion=="是"){
 	 WEEKLY_IS_COMPLETIONName.style.background="yellow";
 	 WEEKLY_IS_COMPLETIONName.style.color="black";
 	 }
 	
 	newRowIndex_WEEKLY++;

 }
 setCell('WEEKLY','WORK_CLASSName') ;
 }
 }
 });
$("#page_saveButton").on("click",function(){
$.ajax({
url:'platform/avicit/weekly/weeklyController/RollingSPlan',
dataType:"json",
type:"GET",
async:false,
}) 

$.ajax({
url:'platform/avicit/weekly/weeklyController/Weedata',
dataType:"json",
type:"GET",
async:false,
data:{
lcid:pageParams.id,
 week:$("#WEEKLY").length,
 rool:$("#ROLLING_PLAN").length
}
 
})
})

	}
},

	    onCellSelect:function(rowid,iCol,cellcontent,e){
		zzfrowid=rowid
    },
	gridComplete: function(){
	var height = $('#WEEKLY').closest('.ui-jqgrid-bdiv').height();
	$("#WEEKLYnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#WEEKLYnorecords img").css("width","120px");
	}else{
		$("#WEEKLYnorecords img").css("width",(height/1.9)+"px");
	}
											},


beforeEditCell:function(){
	$(".datatable").not("#WEEKLY").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




WEEKLYReload = function(){
	var _isInvalid = true;
	$("#WEEKLY").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	WEEKLYTabInitFlag = true;
	$('#WEEKLY').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

WEEKLYTabReload = function(forceFlag){
	if(!WEEKLYTabInitFlag  || forceFlag){
		WEEKLYReload();
	}

}


$('#WEEKLY').parents('div.ui-jqgrid-bdiv').css("max-height","2000px");

//放入表格toolbar中
$('#t_WEEKLY').append($('#WEEKLYToolbar'));

            function formatForWEEKLYWORK_CLASS(cellvalue, options, rowObject){if(cellvalue!=undefined&&cellvalue!=""){ return cellvalue; } var re=/[^\u4E00-\u9FA5]/; if (!re.test(rowObject.WORK_CLASS)){ return rowObject.WORK_CLASS; } return formatWEEKLYWORK_CLASS(cellvalue,options,rowObject) }
    
function formatWEEKLYWORK_CLASS(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
    
    
    
    
    
    
function formatWEEKLYIS_KEYNO(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
            function formatForWEEKLYIS_COMPLETION(cellvalue, options, rowObject){if(cellvalue!=undefined&&cellvalue!=""){
return cellvalue;
}
if(rowObject.IS_COMPLETION=="Y"){
 return "是"
}else if(rowObject.IS_COMPLETION=='N'){
return "否"
}else{
return rowObject.IS_COMPLETION
}

}
    
function formatWEEKLYIS_COMPLETION(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
            function formatForWEEKLYCONTENT(cellvalue, options, rowObject){if(rowObject.CONTENT !=null && rowObject.CONTENT != undefined && rowObject.CONTENT != "" ){
return rowObject.CONTENT ;

}
if(cellvalue!=undefined&&cellvalue!=""){
return cellvalue+=" --"+pageParams.session.userName + "<br>";
}
return "";
}
    


                    
WEEKLYReload();

/**
 * 表格编辑参数
 */
var newRowIndex_WEEKLY = 0;
var newRowStart_WEEKLY = "new_row";


/**
 * 添加页面
 */
insertTableWEEKLY = function(){
	$('#WEEKLY').jqGrid('endEditCell');
	$("#WEEKLYnorecords").hide();//隐藏提示信息
	$("#WEEKLYPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_WEEKLY + newRowIndex_WEEKLY;
	var parameters = {
		rowID : newRowId,
		initdata : {
																																PERSON_LIABLE:pageParams.session.userId,
							PERSON_LIABLEName:pageParams.session.userName,
													COMPLETION_NODE:new Date(),
										IS_KEYNO:  typeof (N) !== 'undefined'? N : 'N',
										IS_COMPLETION:  typeof (N) !== 'undefined'? N : 'N',
																DEPT_ID:pageParams.session.deptId,
							DEPT_IDName:pageParams.session.deptName,
														},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#WEEKLY').jqGrid('addRow', parameters);
	newRowIndex_WEEKLY++;  
};



/**
 * 删除
 */
deleteTableWEEKLY = function(){
	var rows = [];
	rows = $('#WEEKLY').jqGrid('getGridParam','selarrrow');


	$('#WEEKLY').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#WEEKLY').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=WEEKLY',
					data: {ids : ids.join(','),formInfoId:'4028819987207ca4018720c5de1a0524',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#WEEKLY').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
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





$('#WEEKLY').setGridWidth(700);
$('#WEEKLY').jqGrid('resizeGrid');



//按钮绑定事件
$('#WEEKLY_insertBtn').bind('click',function(){
	insertTableWEEKLY();
});

//按钮绑定事件
$('#WEEKLY_deleteBtn').bind('click',function(){
	deleteTableWEEKLY();
});

//自定义按钮绑定事件
																				$('#btn_6').bind('click',function(){
			
		});
							$('#btn_7').bind('click',function(){
			location.href="platform/avicit/weekly/weeklyController/download/";
		});
							$('#btn_8').bind('click',function(){
			var WEEdata;
function setCell(id,name){

var rowId = $('#'+id).jqGrid('getDataIDs');
var length = rowId.length;
for(var i=0;i<length;i++){
var befire = $("#"+id).jqGrid("getRowData",rowId[i]);
var rowSpanTaxCont = 1;
for(var j =i+1;j<=length;j++){
var end = $("#"+id).jqGrid('getRowData',rowId[j]);
if(befire[name] == end[name]){
rowSpanTaxCont++;
$("#"+id).setCell(rowId[j],name,'1211',{
display:"none"
 });
}else{ 
rowSpanTaxCont=1;
break;
}
 $("#"+id).setCell(rowId[i],name,"","",{rowspan:rowSpanTaxCont,});
}
}
}
setCell('WEEKLY','WORK_CLASSName')
function getTime(timestamp) {
 var date = new Date(timestamp );
 Y = date.getFullYear() + '-';
 M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
 D = date.getDate() + ' ';
 h = date.getHours() + ':';
 m = date.getMinutes() + ':';
 s = date.getSeconds();
 return Y+M+D+h+m+s;
 }

$.ajax({
 url:'platform/avicit/weekly/weeklyXController/weeklyRelordPage',
 dataType:"json",
 type:"GET",
 async:false,
 success:function (data) {
if(data.row.length == 0){
 layer.msg('经查询，没有未上报的任务')	
return 
}
 $('#WEEKLY').jqGrid('clearGridData');//清除所有列再去插入
 WEEdata =data.row
 for(var i=0;i<data.row.length;i++) {
 	 $('#WEEKLY').jqGrid('endEditCell');
 	$("#WEEKLYnorecords").hide();//隐藏提示信息
	$("#WEEKLYPager_left").css("display", "block");//隐藏分页信息
 	 var newRowIds =newRowStart_WEEKLY + newRowIndex_WEEKLY;
 	var parameters = {
 			rowID : newRowIds,
 			initdata : {
 				WORK_CLASS:data.row[i].WORK_CLASS,
 				WORK_TASKS:data.row[i].WORK_TASKS,
 				TOP_DATE_EVOLVE:data.row[i].TOP_DATE_EVOLVE,
 				DATE_EVOLVE:data.row[i].DATE_EVOLVE,
 				PERSON_LIABLE:data.row[i].PERSON_LIABLE,
 				PERSON_LIABLEName:data.row[i].PERSON_LIABLEName,
 				COMPLETION_NODE:getTime(data.row[i].COMPLETION_NODE),
 				IS_KEYNO:data.row[i].IS_KEYNO,
 				IS_COMPLETION:data.row[i].IS_COMPLETION,
 				DEPT_ID:pageParams.session.deptId,
 				DEPT_IDName:pageParams.session.deptName,
 CONTENT:data.row[i].CONTENT
 				},
 			position :"first",
 			useDefValues : true,
 			useFormatter : true,
 			addRowParams : {extraparam:{}}
 		}
 	$('#WEEKLY').jqGrid('addRow', parameters);
 	 var elementById = document.querySelector('#WEEKLY #'+newRowIds);
 	
 
 	 var WEEKLY_IS_KEYNOName = elementById.querySelector('[aria-describedby="WEEKLY_IS_KEYNOName"]');
 	 if(data.row[i].IS_KEYNO=="是"){
 	 WEEKLY_IS_KEYNOName.style.background="green";
 	 WEEKLY_IS_KEYNOName.style.color="white";
 	 }
 	 var WEEKLY_IS_COMPLETIONName = elementById.querySelector('[aria-describedby="WEEKLY_IS_COMPLETIONName"]');
 	 if(data.row[i].IS_COMPLETION=="是"){
 	 WEEKLY_IS_COMPLETIONName.style.background="yellow";
 	 WEEKLY_IS_COMPLETIONName.style.color="black";
 	 }
 	
 	newRowIndex_WEEKLY++;

 }
 setCell('WEEKLY','WORK_CLASSName') ;
 }
 });
		});
			//列onchange事件
										WEEKLYIS_KEYNOChange = function(_this,e){
		if(this.value=="Y"){
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="WEEKLY_IS_KEYNOName"]');
elementsByName.style.background="green"
elementsByName.style.color="white"
}else{
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="WEEKLY_IS_KEYNOName"]');
elementsByName.style.background=""
elementsByName.style.color=""
}


    }
				WEEKLYIS_COMPLETIONChange = function(_this,e){
		if(this.value=="Y"){
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="WEEKLY_IS_COMPLETIONName"]');
elementsByName.style.background="yellow"
elementsByName.style.color="black"
}else{
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="WEEKLY_IS_COMPLETIONName"]');
elementsByName.style.background=""
elementsByName.style.color=""
}
    }
			

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "WEEKLY_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#WEEKLY_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#WEEKLY_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#WEEKLY_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#WEEKLY_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "WEEKLY_insertBtn"){
		return;
	}
	if(operability){
		$("#WEEKLY_insertBtn").css("display","inline-block");
	}else{
		$("#WEEKLY_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "WEEKLY_deleteBtn"){
		return;
	}
	if(operability){
		$("#WEEKLY_deleteBtn").css("display","inline-block");
		var subTableName = "WEEKLY_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#WEEKLY_deleteBtn").css("display","none");
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

																									        workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
			if (tagId != "btn_6"){
				return;
			}
			if(operability){
				$("#btn_6").css("display","inline-block");
				$("#"+tagId).parents(".ui-userdata").show();
			}else{
				$("#btn_6").css("display","none");
			}
        });
						        workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
			if (tagId != "btn_7"){
				return;
			}
			if(operability){
				$("#btn_7").css("display","inline-block");
				$("#"+tagId).parents(".ui-userdata").show();
			}else{
				$("#btn_7").css("display","none");
			}
        });
						        workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
			if (tagId != "btn_8"){
				return;
			}
			if(operability){
				$("#btn_8").css("display","inline-block");
				$("#"+tagId).parents(".ui-userdata").show();
			}else{
				$("#btn_8").css("display","none");
			}
        });
					
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#WEEKLY').validateJqGrid("validate");
});

$('#WEEKLY').validateJqGrid("addValidate","WORK_CLASS","required");
		$('#WEEKLY').validateJqGrid("addValidate","WORK_CLASS","maxlength",{maxlength:255});
				$('#WEEKLY').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		$('#WEEKLY').validateJqGrid("addValidate","WORK_TASKS","required");
		$('#WEEKLY').validateJqGrid("addValidate","WORK_TASKS","maxlength",{maxlength:255});
		$('#WEEKLY').validateJqGrid("addValidate","TOP_DATE_EVOLVE","required");
		$('#WEEKLY').validateJqGrid("addValidate","TOP_DATE_EVOLVE","maxlength",{maxlength:255});
		$('#WEEKLY').validateJqGrid("addValidate","DATE_EVOLVE","required");
		$('#WEEKLY').validateJqGrid("addValidate","DATE_EVOLVE","maxlength",{maxlength:255});
		$('#WEEKLY').validateJqGrid("addValidate","PERSON_LIABLE","required");
		$('#WEEKLY').validateJqGrid("addValidate","PERSON_LIABLE","maxlength",{maxlength:255});
		$('#WEEKLY').validateJqGrid("addValidate","COMPLETION_NODE","required");
		$('#WEEKLY').validateJqGrid("addValidate","COMPLETION_NODE","maxlength",{maxlength:255});
				$('#WEEKLY').validateJqGrid("addValidate","IS_KEYNO","maxlength",{maxlength:255});
				$('#WEEKLY').validateJqGrid("addValidate","IS_COMPLETION","maxlength",{maxlength:255});
				$('#WEEKLY').validateJqGrid("addValidate","DEPT_ID","maxlength",{maxlength:255});
				$('#WEEKLY').validateJqGrid("addValidate","CONTENT","maxlength",{maxlength:50});
		



var ROLLING_PLANTabInitFlag = false;

					var ROLLING_PLANROLLING_PLANDATESelect = {"1000":"一月","200":"二月","3":"3"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "none"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			ROLLING_PLANROLLING_PLANDATESelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
									
var dataGridColModel_ROLLING_PLAN =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
               	 ,{ label:'月份Id', name:'ROLLING_PLANDATE', width:75, hidden:true}
   	     ,{ label:'月份', name:'ROLLING_PLANDATEName', width: 5,
		            editable : false,
		                      align:'center',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter: formatForROLLING_PLANROLLING_PLANDATE
	  						  	     , editoptions: {      callBack:function(e){var elementById = document.getElementById(Plan);



var el=elementById.querySelector('[aria-describedby="ROLLING_PLAN_ROLLING_PLANDATEName"]');



el.innerText=this.value;



el.title=this.value;



var ROLLING_PLAN_ROLLING_PLAN_DATE = elementById.querySelector('[aria-describedby="ROLLING_PLAN_ROLLING_PLAN_DATE"]');



 var endtime=new Date();



 ROLLING_PLAN_ROLLING_PLAN_DATE.title=this.value+'-'+endtime.getDate();



ROLLING_PLAN_ROLLING_PLAN_DATE.innerHTML=this.value+'-'+endtime.getDate();},
      	  custom_element:selectElem, custom_value:selectValue, forId:'ROLLING_PLANDATE',
   	     value: function(){return ROLLING_PLANROLLING_PLANDATESelect;}}
	  }
                       ,{ label:'月份', name:'ROLLING_PLAN_DATE', width:20,
		            editable : false,
		                  align:'left',
		        edittype:'custom',
                    hidden:true,
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d', newformat: 'Y-m-d'},
			          editoptions:{custom_element:dateElem,custom_value:dateValue
			 		 }}
                                ,{ label:'工作任务', name: 'ROLLING_PLAN_ASSIGNMENT', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'完成目标', name: 'ROLLING_PLAN_TARGET', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'备注', name: 'ROLLING_PLAN_CONTENT', width:20,
		            editable : false,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'部门IDId', name: 'DEPT_ID', width: 75, hidden:true}
		            ,{ label:'部门ID', name:'DEPT_IDName', width:20,
		            editable : false,
		                  align:'left',
		        edittype:'custom',
	                hidden:true,
         		  		  sortable:false,
		                      	     editoptions:{		  		  selectModel:'single',
		  	     custom_element:deptElem, custom_value:deptValue, forId:'DEPT_ID',viewScope:'currentOrg'}}
	  
         ]

var extraParamROLLING_PLAN = '{}';


ROLLING_PLANUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                            };

if (window.ROLLING_PLAN_comid == null || window.ROLLING_PLAN_comid == undefined || window.ROLLING_PLAN_comid == '') {
	window.ROLLING_PLAN_comid = id;
}

$('#ROLLING_PLAN').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=ROLLING_PLAN',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.ROLLING_PLAN_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"4028819987207ca4018720c5de1a0524",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_ROLLING_PLAN,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	rownumbers: true,
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	pager:ROLLING_PLANPager,
	hasColSet:false,
	hasTabExport:false,
    rowNum: 20,
    rowList:[20, 50, 100, 200, 500],

	shrinkToFit:true,

beforeRequest: function () {
    $("#ROLLING_PLANnorecords").hide();//隐藏提示信息
    $("#ROLLING_PLANPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#ROLLING_PLAN').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#ROLLING_PLANnorecords").html() == null) {
            $('#ROLLING_PLAN').parent().append("<div class='no_data' style='display: none' id='ROLLING_PLANnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#ROLLING_PLAN').closest('.ui-jqgrid-bdiv').height();
        $("#ROLLING_PLANnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#ROLLING_PLANnorecords img").css("width","120px");
        }else{
            $("#ROLLING_PLANnorecords img").css("width",(height/1.9)+"px");
        }
        $("#ROLLING_PLANnorecords").show();//显示提示信息
        $("#ROLLING_PLANPager_left").css("display", "none");//显示分页信息
    }
    if ($('#ROLLING_PLAN').getGridParam('datatype')!= 'local'){
		var plandata;
function setCell(id,name){
var rowId = $('#'+id).jqGrid('getDataIDs');
var length = rowId.length;
for(var i=0;i<length;i++){
var befire = $("#"+id).jqGrid("getRowData",rowId[i]);
var rowSpanTaxCont = 1;
for(var j =i+1;j<=length;j++){
var end = $("#"+id).jqGrid('getRowData',rowId[j]);
if(befire[name] == end[name]){
rowSpanTaxCont++;
$("#"+id).setCell(rowId[j],name,'1211',{
display:"none"
 });
}else{ 
rowSpanTaxCont=1;
break;
}
 $("#"+id).setCell(rowId[i],name,"","",{rowspan:rowSpanTaxCont,});
}
}
}
 setCell('ROLLING_PLAN','ROLLING_PLANDATEName')
$.ajax({
 url:'platform/avicit/weekly/weeklyController/RollingSPlan',
 dataType:"json",
 type:"GET",
 async:false,
 success:function (data) {
 if($('[aria-describedby="ROLLING_PLAN_rn"]').length<=0){
 plandata=data.row
 for(var i=0;i<data.row.length;i++) {
	$('#ROLLING_PLAN').jqGrid('endEditCell');
 	$("#ROLLING_PLANnorecords").hide();//隐藏提示信息
	$("#ROLLING_PLANPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_ROLLING_PLAN + newRowIndex_ROLLING_PLAN;

 	var parameters = {
 			rowID : newRowId,
 			initdata : {
 				ROLLING_PLANDATE:data.row[i].rollingPlanDate,
 				ROLLING_PLAN_DATE:data.row[i].rollingPlanDate,
 				ROLLING_PLAN_ASSIGNMENT:data.row[i].rollingPlanAssignment,
 				ROLLING_PLAN_TARGET:data.row[i].rollingPlanTarget,
 				ROLLING_PLAN_CONTENT:data.row[i].rollingPlanContent,
 				DEPT_ID:pageParams.session.deptId
 				},
 			position :"first",
 			useDefValues : true,
 			useFormatter : true,
 			addRowParams : {extraparam:{}}
 		}
 	
 	$('#ROLLING_PLAN').jqGrid('addRow', parameters);
 var inid= $('#'+newRowId+' [aria-describedby="ROLLING_PLAN_ROLLING_PLANDATEName"]');
 inid.text(data.row[i].rollingPlanDate)
 	newRowIndex_ROLLING_PLAN++; 
 	
 	}
 setCell('ROLLING_PLAN','ROLLING_PLANDATEName')
 }
 
 
 
 }});
$("#anniu").css("display","");
	}
},

	    onCellSelect:function(rowid,iCol,cellcontent,e){
		Plan = rowid;
var time = setTimeout(function () {
 var inid= $('[name="ROLLING_PLANDATEName"]');
 if(inid.length==0){
 return;
 }
 var endtime=new Date();
 var moth= endtime.getMonth()+1;
 var year= endtime.getFullYear();
 var mothv="";
 var motho=1;
 var mothov="";
 var mos=2;
 var mosv="";
 mothv+=year;
 if(moth<10){
 mothv+="-";
 mothv+="0";
 mothv+=moth;
 }else {
 mothv+="-"
 mothv+=moth;
 }
 inid.children()[1].value=mothv;
 inid.children()[1].innerText=year+"年"+moth+"月";
 motho+=moth;
 if(motho>12){
 motho-=12;
 year++;
 }
 mothov+=year;
 if(motho<10){
 mothov+="-";
 mothov+="0";
 mothov+=motho;
 }else {
 mothov+="-"
 mothov+=motho;
 }
 inid.children()[2].value=mothov;
 inid.children()[2].innerText=year+"年"+motho+"月";
 mos+=moth;
 if(mos>12){
 mos-=12;
 }
 mosv+=year;
 if(mos<10){
 mosv+="-";
 mosv+="0";
 mosv+=mos;
 }else {
 mosv+="-"
 mosv+=mos;
 }
 inid.children()[3].value=mosv;
 inid.children()[3].innerText=year+"年"+mos+"月";
 clearTimeout(time);
},200);


    },
	gridComplete: function(){
	var height = $('#ROLLING_PLAN').closest('.ui-jqgrid-bdiv').height();
	$("#ROLLING_PLANnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#ROLLING_PLANnorecords img").css("width","120px");
	}else{
		$("#ROLLING_PLANnorecords img").css("width",(height/1.9)+"px");
	}
							},


beforeEditCell:function(){
	$(".datatable").not("#ROLLING_PLAN").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




ROLLING_PLANReload = function(){
	var _isInvalid = true;
	$("#ROLLING_PLAN").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	ROLLING_PLANTabInitFlag = true;
	$('#ROLLING_PLAN').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

ROLLING_PLANTabReload = function(forceFlag){
	if(!ROLLING_PLANTabInitFlag  || forceFlag){
		ROLLING_PLANReload();
	}

}


$('#ROLLING_PLAN').parents('div.ui-jqgrid-bdiv').css("max-height","2000px");

//放入表格toolbar中
$('#t_ROLLING_PLAN').append($('#ROLLING_PLANToolbar'));

            function formatForROLLING_PLANROLLING_PLANDATE(cellvalue, options, rowObject){if(cellvalue!=''&&cellvalue!=undefined){
return cellvalue
}
if(rowObject.ROLLING_PLANDATE==undefined){

return "请选择"
}
return rowObject.ROLLING_PLANDATE}
    
function formatROLLING_PLANROLLING_PLANDATE(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
    
    
    
    
    


                
ROLLING_PLANReload();

/**
 * 表格编辑参数
 */
var newRowIndex_ROLLING_PLAN = 0;
var newRowStart_ROLLING_PLAN = "new_row";


/**
 * 添加页面
 */
insertTableROLLING_PLAN = function(){
	$('#ROLLING_PLAN').jqGrid('endEditCell');
	$("#ROLLING_PLANnorecords").hide();//隐藏提示信息
	$("#ROLLING_PLANPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_ROLLING_PLAN + newRowIndex_ROLLING_PLAN;
	var parameters = {
		rowID : newRowId,
		initdata : {
																																											DEPT_ID:pageParams.session.deptId,
							DEPT_IDName:pageParams.session.deptName,
									},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#ROLLING_PLAN').jqGrid('addRow', parameters);
	newRowIndex_ROLLING_PLAN++;  
};



/**
 * 删除
 */
deleteTableROLLING_PLAN = function(){
	var rows = [];
	rows = $('#ROLLING_PLAN').jqGrid('getGridParam','selarrrow');


	$('#ROLLING_PLAN').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#ROLLING_PLAN').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=ROLLING_PLAN',
					data: {ids : ids.join(','),formInfoId:'4028819987207ca4018720c5de1a0524',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#ROLLING_PLAN').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
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





$('#ROLLING_PLAN').setGridWidth(700);
$('#ROLLING_PLAN').jqGrid('resizeGrid');



//按钮绑定事件
$('#ROLLING_PLAN_insertBtn').bind('click',function(){
	insertTableROLLING_PLAN();
});

//按钮绑定事件
$('#ROLLING_PLAN_deleteBtn').bind('click',function(){
	deleteTableROLLING_PLAN();
});

//自定义按钮绑定事件
																//列onchange事件
			ROLLING_PLANROLLING_PLANDATEChange = function(_this,e){
		var elementById = document.getElementById(Plan);



var el=elementById.querySelector('[aria-describedby="ROLLING_PLAN_ROLLING_PLANDATEName"]');



el.innerText=this.value;



el.title=this.value;



var ROLLING_PLAN_ROLLING_PLAN_DATE = elementById.querySelector('[aria-describedby="ROLLING_PLAN_ROLLING_PLAN_DATE"]');



 var endtime=new Date();



 ROLLING_PLAN_ROLLING_PLAN_DATE.title=this.value+'-'+endtime.getDate();



ROLLING_PLAN_ROLLING_PLAN_DATE.innerHTML=this.value+'-'+endtime.getDate();
    }
							

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "ROLLING_PLAN_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#ROLLING_PLAN_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#ROLLING_PLAN_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#ROLLING_PLAN_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#ROLLING_PLAN_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "ROLLING_PLAN_insertBtn"){
		return;
	}
	if(operability){
		$("#ROLLING_PLAN_insertBtn").css("display","inline-block");
	}else{
		$("#ROLLING_PLAN_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "ROLLING_PLAN_deleteBtn"){
		return;
	}
	if(operability){
		$("#ROLLING_PLAN_deleteBtn").css("display","inline-block");
		var subTableName = "ROLLING_PLAN_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#ROLLING_PLAN_deleteBtn").css("display","none");
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
	return $('#ROLLING_PLAN').validateJqGrid("validate");
});

$('#ROLLING_PLAN').validateJqGrid("addValidate","ROLLING_PLANDATE","required");
		$('#ROLLING_PLAN').validateJqGrid("addValidate","ROLLING_PLANDATE","maxlength",{maxlength:255});
		$('#ROLLING_PLAN').validateJqGrid("addValidate","ROLLING_PLAN_DATE","required");
		$('#ROLLING_PLAN').validateJqGrid("addValidate","ROLLING_PLAN_DATE","maxlength",{maxlength:255});
				$('#ROLLING_PLAN').validateJqGrid("addValidate","ROLLING_PLAN_ASSIGNMENT","maxlength",{maxlength:255});
				$('#ROLLING_PLAN').validateJqGrid("addValidate","ROLLING_PLAN_TARGET","maxlength",{maxlength:255});
				$('#ROLLING_PLAN').validateJqGrid("addValidate","ROLLING_PLAN_CONTENT","maxlength",{maxlength:255});
				$('#ROLLING_PLAN').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
				$('#ROLLING_PLAN').validateJqGrid("addValidate","DEPT_ID","maxlength",{maxlength:255});
		


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