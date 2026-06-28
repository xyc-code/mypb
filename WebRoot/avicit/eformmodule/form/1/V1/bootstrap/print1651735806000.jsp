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
 <table style=" border: 1px solid;" id="KGozZnU2g6RbVAGgTTV5jafRQal5E24k" border="1" class="form_commonTable1"> 
  <tbody> 
   <tr> 
    <td style="width:100%; border: 1px solid;"> 
     <div class="bpm_self_class input-sm input-group-sm " id="DATA_2" title="字段_2" style="height: auto;"> 
      <label class="checkbox-inline" style=";"> <input type="checkbox" id="DATA_21" name="DATA_2" title="字段_2" value="1" <c:forEach items="${ map['DATA_2'] }" var="s"> 
       <c:if test="${s eq '1'}">
         checked="true"</c:if> </c:forEach> /> 1 
       </label> 
     </div></td> 
   </tr> 
   <tr> 
    <td style="width:100%; border: 1px solid;"> 
     <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
      <tbody> 
       <tr> 
        <td> 
         <div title="DYN_SUB_1_1" id="DYN_SUB_1_1_control" class="eform_subtable_bpm_auth"> 
          <div title=""> 
           <table id="DYN_SUB_1_1" class="datatable eform_component" datapermission="eform_data_DYN_SUB_1_1"></table> 
           <div id="DYN_SUB_1_1Pager"></div> 
           <div id="DYN_SUB_1_1Toolbar" class="toolbar"> 
            <div class="toolbar-left"> 
             <a id="DYN_SUB_1_1_insertBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth btn-point" role="button" title="添加"><span class="glyphicon glyphicon-plus"></span> 添加</a> 
             <a id="DYN_SUB_1_1_importBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导入" style="display:none;"><span class="glyphicon glyphicon-import"></span> 导入</a> 
             <a id="DYN_SUB_1_1_exportBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="导出" style="display:none;"><span class="glyphicon glyphicon-export"></span> 导出</a> 
             <a id="DYN_SUB_1_1_inputBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="参考录入" style="display:none;"><span class="glyphicon glyphicon-th"></span> 参考录入</a> 
             <a id="DYN_SUB_1_1_deleteBtn" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm eform_subtable_bpm_button_auth" role="button" title="删除"><span class="glyphicon glyphicon-trash"></span> 删除</a> 
            </div> 
            <div class="toolbar-right"> 
            </div> 
           </div> 
          </div> 
         </div> </td> 
       </tr> 
      </tbody> 
     </table> </td> 
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
    var formInfoId = "402811817fd0a4d7017fd3bdd4d80482";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = '${entryId}';
    var tableName = "DYN_2";
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

        //流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
    if (tagId != "DATA_2"){
        return true;
    }
    if(operability){
                        var $tag = $('#DATA_21');
            $tag.removeAttr("disabled");
                }
});

workflowControlForAccess.addcontrolFunc(function(tagId, operability){
    if (tagId != "DATA_2"){
        return;
    }

    if(operability){
        $("#DATA_2").show();
    }else{
        $("#DATA_2").hide();
    }
});

workflowControlForRequired.addcontrolFunc(function(tagId,required,obj){
    if (tagId != "DATA_2"){
        return;
    }

    if (required){
        $('input[name="DATA_2"]').attr("required","required");
    }else{
        $('input[name="DATA_2"]').removeAttr("required","required");
    }
});
            $('input[name="DATA_2"]').on('click',function(e){
            $("#dyn11").show();
        });
        
var DYN_SUB_1_1TabInitFlag = false;

		
var dataGridColModel_DYN_SUB_1_1 =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'子表字段1', name: 'DATA_1', width:20,
		            editable : true,
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
         ]

var extraParamDYN_SUB_1_1 = '{}';


DYN_SUB_1_1UpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
        };

if (window.DYN_SUB_1_1_comid == null || window.DYN_SUB_1_1_comid == undefined || window.DYN_SUB_1_1_comid == '') {
	window.DYN_SUB_1_1_comid = id;
}

$('#DYN_SUB_1_1').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_SUB_1_1',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_SUB_1_1_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817fd0a4d7017fd3bdd4d80482",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_SUB_1_1,
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
    $("#DYN_SUB_1_1norecords").hide();//隐藏提示信息
    $("#DYN_SUB_1_1Pager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_SUB_1_1').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_SUB_1_1norecords").html() == null) {
            $('#DYN_SUB_1_1').parent().append("<div class='no_data' style='display: none' id='DYN_SUB_1_1norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_SUB_1_1').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_SUB_1_1norecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_SUB_1_1norecords img").css("width","120px");
        }else{
            $("#DYN_SUB_1_1norecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_SUB_1_1norecords").show();//显示提示信息
        $("#DYN_SUB_1_1Pager_left").css("display", "none");//显示分页信息
    }
},

	gridComplete: function(){
	var height = $('#DYN_SUB_1_1').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_SUB_1_1norecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_SUB_1_1norecords img").css("width","120px");
	}else{
		$("#DYN_SUB_1_1norecords img").css("width",(height/1.9)+"px");
	}
		},


beforeEditCell:function(){
	$(".datatable").not("#DYN_SUB_1_1").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_SUB_1_1Reload = function(){
	var _isInvalid = true;
	$("#DYN_SUB_1_1").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_SUB_1_1TabInitFlag = true;
	$('#DYN_SUB_1_1').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_SUB_1_1TabReload = function(forceFlag){
	if(!DYN_SUB_1_1TabInitFlag  || forceFlag){
		DYN_SUB_1_1Reload();
	}

}


$('#DYN_SUB_1_1').parents('div.ui-jqgrid-bdiv').css("max-height","150px");

//放入表格toolbar中
$('#t_DYN_SUB_1_1').append($('#DYN_SUB_1_1Toolbar'));

    
    


        
DYN_SUB_1_1Reload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_SUB_1_1 = 0;
var newRowStart_DYN_SUB_1_1 = "new_row";


/**
 * 添加页面
 */
insertTableDYN_SUB_1_1 = function(){
	$('#DYN_SUB_1_1').jqGrid('endEditCell');
	$("#DYN_SUB_1_1norecords").hide();//隐藏提示信息
	$("#DYN_SUB_1_1Pager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_SUB_1_1 + newRowIndex_DYN_SUB_1_1;
	var parameters = {
		rowID : newRowId,
		initdata : {
													},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_SUB_1_1').jqGrid('addRow', parameters);
	newRowIndex_DYN_SUB_1_1++;  
};



/**
 * 删除
 */
deleteTableDYN_SUB_1_1 = function(){
	var rows = [];
	rows = $('#DYN_SUB_1_1').jqGrid('getGridParam','selarrrow');


	$('#DYN_SUB_1_1').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_SUB_1_1').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_SUB_1_1',
					data: {ids : ids.join(','),formInfoId:'402811817fd0a4d7017fd3bdd4d80482',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_SUB_1_1').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
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





$('#DYN_SUB_1_1').setGridWidth(700);
$('#DYN_SUB_1_1').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_SUB_1_1_insertBtn').bind('click',function(){
	insertTableDYN_SUB_1_1();
});

//按钮绑定事件
$('#DYN_SUB_1_1_deleteBtn').bind('click',function(){
	deleteTableDYN_SUB_1_1();
});

//自定义按钮绑定事件
																//列onchange事件
		

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_1_1_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_SUB_1_1_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_SUB_1_1_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_SUB_1_1_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_SUB_1_1_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_1_1_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_SUB_1_1_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_SUB_1_1_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SUB_1_1_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_SUB_1_1_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_SUB_1_1_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_SUB_1_1_deleteBtn").css("display","none");
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
	return $('#DYN_SUB_1_1').validateJqGrid("validate");
});

		$('#DYN_SUB_1_1').validateJqGrid("addValidate","DATA_1","maxlength",{maxlength:255});
				$('#DYN_SUB_1_1').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		


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