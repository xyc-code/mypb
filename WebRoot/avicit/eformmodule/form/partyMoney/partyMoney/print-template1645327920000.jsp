
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
String importlibs = "common,table,form,fileupload,noLoading-mask";
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
    <link rel="stylesheet" type="text/css" href="static/h5/kindeditor/themes/default/default.css" />
    <link rel="stylesheet" type="text/css" href="static/css/platform/eform/print.css"/>
    <link rel="stylesheet" type="text/css" href="avicit/platform6/eform/formdesign/css/tinymce-content/default.css">
    <link rel="stylesheet" type="text/css" href="avicit/platform6/formprint/printdesign/css/tinymce-content/default.css"/>
</head>

    <form id='form' onkeydown="if(event.keyCode==13){return event.srcElement.tagName=='TEXTAREA'?true:false;}">
        <div class="mce-content-body">
 <div style="text-align: center; font-size: 24px; margin: 15px;">
   党费使用审批 
 </div>
 <table style="" id="KyQ7pLxVBOFU9Ov71eSp3ki9RcvKh00E" class="form_commonTable1"> 
  <tbody> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="REQUEST_DATE" id="hzkWAwE5srJCikXbE4OFOCsVEicz7rfy">申请时间：</label></td> 
    <td style="width:19%; height: 30px;"> 
     <div class=""> 
      <textarea id="REQUEST_DATE" name="REQUEST_DATE" style="" class="form-control" readonly rows="1" title="申请日期" data-precision="">${map["REQUEST_DATE"]}</textarea> 
     </div> </td> 
    <td style="width:25%; text-align: right; height: 30px;"><label for="AUTO_CODE" id="upZTbQfm6SIBMVleAHCh2vRCSSWoED5l">表单编号：</label></td> 
    <td style="width:25%; height: 30px;"> 
     <div class=""> 
      <textarea id="AUTO_CODE" name="AUTO_CODE" style="" class="form-control" readonly rows="1" title="表单编号" data-precision="">${map["AUTO_CODE"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="USER_NAME">申请人：</label></td> 
    <td style="width:19%; height: 30px;"> 
     <div class=""> 
      <textarea id="USER_NAME" name="USER_NAME" style="" class="form-control" readonly rows="1" title="申请人" data-precision="">${map["USER_NAME"]}</textarea> 
     </div> </td> 
    <td style="width:25%; text-align: right; height: 30px;"><label for="DEPT_NAME">申请部门：</label></td> 
    <td style="width:25%; height: 30px;"> 
     <div class=""> 
      <textarea id="DEPT_NAME" name="DEPT_NAME" style="" class="form-control" readonly rows="1" title="申请部门" data-precision="">${map["DEPT_NAME"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="HANDER" id="QDEagnTLa92Z22sMThH9s9KH6e6Y9CkJ"><i class="required" style="color: red;">*</i>经办人：</label></td> 
    <td style="width:19%; height: 30px;"> 
     <div class=""> 
      <textarea id="HANDER" name="HANDER" style="" class="form-control" readonly rows="1" title="经办人" data-precision="">${map["HANDER"]}</textarea> 
     </div> </td> 
    <td style="width:25%; text-align: right; height: 30px;"><label for="HANDER_PARTY_NAME" id="IWGiDZVJJ1n1WytbvXnN7JLFj9barii6">经办人所在党支部：</label></td> 
    <td style="width:25%; height: 30px;"> 
     <div class=""> 
      <textarea id="PARTY_NAME" name="PARTY_NAME" style="" class="form-control" readonly rows="1" title="所在党支部" data-precision="">${map["PARTY_NAME"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="TEL" id="EGmM0DyectG3P9dalGQhMnIfnAKZ6KhG">联系电话：</label></td> 
    <td style="width:19%; height: 30px;"> 
     <div class=""> 
      <textarea id="TEL" name="TEL" style="" class="form-control" readonly rows="1" title="联系电话" data-precision="">${map["TEL"]}</textarea> 
     </div> </td> 
    <td style="width:25%; text-align: right; height: 30px;"><label for="PARTY_MEMBER_NUM" id="s9iL2vBh99zYWSASSIoPZDK9Ewo2cS0A">党员人数：</label></td> 
    <td style="width:25%; height: 30px;"> 
     <div class=""> 
      <textarea id="PARTY_MEMBER_NUM" name="PARTY_MEMBER_NUM" style="" class="form-control" readonly rows="1" title="党员人数" data-precision="0">${map["PARTY_MEMBER_NUM"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 29px;"> 
    <td style="width:6%; text-align: right; height: 29px;"><label for="TOTAL_MONEY" id="DUnvGwzd087F16Jvt9zTlwCnjfhBnwib">总计金额：</label></td> 
    <td style="width:19%; height: 29px;"> 
     <div class=""> 
      <textarea id="TOTAL_MONEY" name="TOTAL_MONEY" style="" class="form-control" readonly rows="1" title="总计金额" data-precision="0">${map["TOTAL_MONEY"]}</textarea> 
     </div> </td> 
    <td style="width:25%; height: 29px; text-align: right;"></td> 
    <td style="width:25%; height: 29px;"></td> 
   </tr> 
   <tr style="height: 30px;"> 
    <td style="width:6%; text-align: right; height: 30px;"><label for="HANDER_ID" id="ojQm1Y7vIWdff0eSoy6nZ2w5PqrsRhVr">经办人ID:</label></td> 
    <td style="width:19%; height: 30px;"> 
     <div class=""> 
      <div id="HANDER_ID" name="HANDER_ID" style=";height: auto;" class="form-control" readonly rows="1" title="经办人ID" data-precision="">
        ${map["HANDER_ID"]} 
      </div> 
     </div> </td> 
    <td style="width:25%; text-align: right; height: 30px;"><label for="PARTY_ID" id="IWGiDZVJJ1n1WytbvXnN7JLFj9barii6">所在党支部ID:</label></td> 
    <td style="width:25%; height: 30px;"> 
     <div class=""> 
      <textarea id="PARTY_ID" name="PARTY_ID" style="" class="form-control" readonly rows="1" title="所在党支部ID" data-precision="">${map["PARTY_ID"]}</textarea> 
     </div> </td> 
   </tr> 
   <tr style="height: 49px;"> 
    <td style="width:75%; text-align: left; height: 49px;" colspan="4"></td> 
   </tr> 
   <tr style="height: 38.775px;"> 
    <td style="width:75%; text-align: left; height: 38.775px;" colspan="4"> 
     <div class="eform-tab"> 
      <ul class="nav nav-tabs" role="tablist"> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab active"><a href="#QiAcJat2YkY5Fcu8i19dTUPnQlBIEBAn" aria-controls="QiAcJat2YkY5Fcu8i19dTUPnQlBIEBAn" role="tab" data-toggle="tab">学习资料</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#vMZiPxxhNMfAxtT4Pspv1XulHfOGy2FA" aria-controls="vMZiPxxhNMfAxtT4Pspv1XulHfOGy2FA" role="tab" data-toggle="tab">场地费用</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#SvwRJOeINHIxVwRcRyqrzGvdCjhOdQUb" aria-controls="SvwRJOeINHIxVwRcRyqrzGvdCjhOdQUb" role="tab" data-toggle="tab">工本费</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#nPxqis67Q3Vc57gUTKgT9n3bbK9mqcCP" aria-controls="nPxqis67Q3Vc57gUTKgT9n3bbK9mqcCP" role="tab" data-toggle="tab">设备费用</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#ir6KAtetp87IsqJuCIQNUF964umma3t0" aria-controls="ir6KAtetp87IsqJuCIQNUF964umma3t0" role="tab" data-toggle="tab">党徽、党旗</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#iwkRtDgNXLHZDUGM95HpefAbMAwHAoKB" aria-controls="iwkRtDgNXLHZDUGM95HpefAbMAwHAoKB" role="tab" data-toggle="tab">困难党员</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#TOMWatZ7QH2Rq3e6qVdpyZh0g9UqM3gJ" aria-controls="TOMWatZ7QH2Rq3e6qVdpyZh0g9UqM3gJ" role="tab" data-toggle="tab">表彰</a></li> 
       <li role="presentation" onclick="if (window.jQuery){$(window).trigger('resize');}" class="presentation eform-form-tab"><a href="#D4CqGdkGjQ4x2hNhvoEgjTv55Npm0NRN" aria-controls="D4CqGdkGjQ4x2hNhvoEgjTv55Npm0NRN" role="tab" data-toggle="tab">其他</a></li> 
      </ul> 
      <div class="tab-content" style="height: 100%; min-height: 40px;"> 
       <div role="tabpanel" class="tab-pane active" id="QiAcJat2YkY5Fcu8i19dTUPnQlBIEBAn" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PM_XXZL" id="DYN_PM_XXZL_control" class="eform_subtable_bpm_auth"> 
             <table id="DYN_PM_XXZL" class="datatable" datapermission="eform_data_DYN_PM_XXZL"></table> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="vMZiPxxhNMfAxtT4Pspv1XulHfOGy2FA" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PM_CD" id="DYN_PM_CD_control" class="eform_subtable_bpm_auth"> 
             <table id="DYN_PM_CD" class="datatable" datapermission="eform_data_DYN_PM_CD"></table> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="SvwRJOeINHIxVwRcRyqrzGvdCjhOdQUb" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PM_GB" id="DYN_PM_GB_control" class="eform_subtable_bpm_auth"> 
             <table id="DYN_PM_GB" class="datatable" datapermission="eform_data_DYN_PM_GB"></table> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="nPxqis67Q3Vc57gUTKgT9n3bbK9mqcCP" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PM_SB" id="DYN_PM_SB_control" class="eform_subtable_bpm_auth"> 
             <table id="DYN_PM_SB" class="datatable" datapermission="eform_data_DYN_PM_SB"></table> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="ir6KAtetp87IsqJuCIQNUF964umma3t0" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PM_DHDQ" id="DYN_PM_DHDQ_control" class="eform_subtable_bpm_auth"> 
             <table id="DYN_PM_DHDQ" class="datatable" datapermission="eform_data_DYN_PM_DHDQ"></table> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="iwkRtDgNXLHZDUGM95HpefAbMAwHAoKB" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PM_KNDY" id="DYN_PM_KNDY_control" class="eform_subtable_bpm_auth"> 
             <table id="DYN_PM_KNDY" class="datatable" datapermission="eform_data_DYN_PM_KNDY"></table> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="TOMWatZ7QH2Rq3e6qVdpyZh0g9UqM3gJ" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_PM_BZ" id="DYN_PM_BZ_control" class="eform_subtable_bpm_auth"> 
             <table id="DYN_PM_BZ" class="datatable" datapermission="eform_data_DYN_PM_BZ"></table> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
       <div role="tabpanel" class="tab-pane" id="D4CqGdkGjQ4x2hNhvoEgjTv55Npm0NRN" style="height: 100%; min-height: 40px;"> 
        <table title="" style="table-layout: fixed;margin: 0;width: 100%;"> 
         <tbody> 
          <tr> 
           <td> 
            <div title="DYN_QT" id="DYN_QT_control" class="eform_subtable_bpm_auth"> 
             <table id="DYN_QT" class="datatable" datapermission="eform_data_DYN_QT"></table> 
            </div> </td> 
          </tr> 
         </tbody> 
        </table> 
       </div> 
      </div> 
     </div><p></p></td> 
   </tr> 
  </tbody> 
 </table>
 <p></p>
</div>
    </form>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/eform/formdefine/js/eformCustomDialog.js"></script>
<script src="static/js/platform/eform/common.js"></script>
<script src="avicit/platform6/autocode/js/AutoCode.js"></script>
<script type="text/javascript" src="static/h5/jquery-form/jquery.form.js"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js"></script>

<!-- 富文本的js与css -->
<script src="static/h5/kindeditor/kindeditor-all-min.js"></script>
<script src="static/h5/kindeditor/lang/zh-CN.js"></script>
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
    // 这个值有效 表单的id
    var formInfoId = "${formInfoId}";
    var datasourceId = "${datasourceId}";
    var pgrid = "${grid}";
    var fkcol = "${fkcol}";
    var fkvalue = "${fkvalue}";
    var entryId = "${entryId}";
    // 数据库名称
    var tableName = "";
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

    // 控制数字精度
    function formatNum(number, decimals, dec_point, thousands_sep) {
        number = (number + '').replace(/[^0-9+-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? '' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                s = '',
                toFixedFix = function (n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + Math.round(n * k) / k;
                };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (sep != '' && s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }

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
        version: "${version}" // 没有处理
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
        // 这里放控件生成的js
        













        $('#PARTY_MEMBER_NUM').val(formatNum($('#PARTY_MEMBER_NUM').val(), 0));
    

        $('#TOTAL_MONEY').val(formatNum($('#TOTAL_MONEY').val(), 0));
    





var dataGridColModel_DYN_PM_XXZL =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'XL_NAME', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'数量', name:'XL_NUM', width:20, editable:false,
	      editrules:{number:true,
		  				  				},
		  		            editoptions:{dataEvents:[{type:'change',fn:function(e){ZL_TOTAL_PRICECalculate(e,'XL_NUM');}}]},
		  		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'XL_UNION_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		                        editoptions:{dataEvents:[{type:'change',fn:function(e){ZL_TOTAL_PRICECalculate(e,'XL_UNION_PRICE');}}]},
          		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'ZL_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PM_XXZLUpdateColSata = function() {
        				        
        				        
        				        
        };

if (window.DYN_PM_XXZL_comid == null || window.DYN_PM_XXZL_comid == undefined || window.DYN_PM_XXZL_comid == '') {
	window.DYN_PM_XXZL_comid = id;
}
$('#DYN_PM_XXZL').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PM_XXZL',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PM_XXZL_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f0a889d017f0ac42f710477",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PM_XXZL,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                
                
                
        	forceFit:false
});



                    

        	function ZL_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PM_XXZL').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PM_XXZL').jqGrid("getRowData", rowid);
				var XL_NUM = Number(rowdata["XL_NUM"]);
				var XL_UNION_PRICE = Number(rowdata["XL_UNION_PRICE"]);
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = XL_NUM*XL_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PM_XXZL').jqGrid("setCell",rowid,"ZL_TOTAL_PRICE",calculateValue);
	}
                
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PM_XXZL = 0;
var newRowStart_DYN_PM_XXZL = "new_row";




$('#DYN_PM_XXZL').setGridWidth(700);
$('#DYN_PM_XXZL').jqGrid('resizeGrid');


var dataGridColModel_DYN_PM_CD =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'地点', name: 'CD_PLACE', width:20, editable : false,
         		  		  	  	}
                       ,{ label:'活动名称', name: 'CD_ACTIVITY', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'金额', name:'CD_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PM_CDUpdateColSata = function() {
            				        
        };

if (window.DYN_PM_CD_comid == null || window.DYN_PM_CD_comid == undefined || window.DYN_PM_CD_comid == '') {
	window.DYN_PM_CD_comid = id;
}
$('#DYN_PM_CD').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PM_CD',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PM_CD_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f0a889d017f0ac42f710477",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PM_CD,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                    
        	forceFit:false
});



                

                
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PM_CD = 0;
var newRowStart_DYN_PM_CD = "new_row";




$('#DYN_PM_CD').setGridWidth(700);
$('#DYN_PM_CD').jqGrid('resizeGrid');


var dataGridColModel_DYN_PM_GB =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'资料名称', name: 'GB_NAME', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'数量', name:'GB_NUM', width:20, editable:false,
	      editrules:{number:true,
		  				  				},
		  		            editoptions:{dataEvents:[{type:'change',fn:function(e){GB_TOTAL_PRICECalculate(e,'GB_NUM');}}]},
		  		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'BG_UNION_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		                        editoptions:{dataEvents:[{type:'change',fn:function(e){GB_TOTAL_PRICECalculate(e,'BG_UNION_PRICE');}}]},
          		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'GB_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PM_GBUpdateColSata = function() {
        				        
        				        
        				        
        };

if (window.DYN_PM_GB_comid == null || window.DYN_PM_GB_comid == undefined || window.DYN_PM_GB_comid == '') {
	window.DYN_PM_GB_comid = id;
}
$('#DYN_PM_GB').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PM_GB',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PM_GB_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f0a889d017f0ac42f710477",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PM_GB,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                
                
                
        	forceFit:false
});



                    

                	function GB_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PM_GB').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PM_GB').jqGrid("getRowData", rowid);
				var GB_NUM = Number(rowdata["GB_NUM"]);
				var BG_UNION_PRICE = Number(rowdata["BG_UNION_PRICE"]);
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = GB_NUM*BG_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PM_GB').jqGrid("setCell",rowid,"GB_TOTAL_PRICE",calculateValue);
	}
        
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PM_GB = 0;
var newRowStart_DYN_PM_GB = "new_row";




$('#DYN_PM_GB').setGridWidth(700);
$('#DYN_PM_GB').jqGrid('resizeGrid');


var dataGridColModel_DYN_PM_SB =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'SB_NAME', width:20, editable : false,
         		  		  	  	}
                       ,{ label:'用途', name: 'SB_USE', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'数量', name:'SB_NUM', width:20, editable:false,
	      editrules:{number:true,
		  				  				},
		  		            editoptions:{dataEvents:[{type:'change',fn:function(e){SB_TOTAL_PRICECalculate(e,'SB_NUM');}}]},
		  		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'SB_UNION_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		                        editoptions:{dataEvents:[{type:'change',fn:function(e){SB_TOTAL_PRICECalculate(e,'SB_UNION_PRICE');}}]},
          		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'SB_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PM_SBUpdateColSata = function() {
            				        
        				        
        				        
        };

if (window.DYN_PM_SB_comid == null || window.DYN_PM_SB_comid == undefined || window.DYN_PM_SB_comid == '') {
	window.DYN_PM_SB_comid = id;
}
$('#DYN_PM_SB').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PM_SB',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PM_SB_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f0a889d017f0ac42f710477",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PM_SB,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                    
                
                
        	forceFit:false
});



                        

                    	function SB_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PM_SB').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PM_SB').jqGrid("getRowData", rowid);
				var SB_NUM = Number(rowdata["SB_NUM"]);
				var SB_UNION_PRICE = Number(rowdata["SB_UNION_PRICE"]);
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = SB_NUM*SB_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PM_SB').jqGrid("setCell",rowid,"SB_TOTAL_PRICE",calculateValue);
	}
        
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PM_SB = 0;
var newRowStart_DYN_PM_SB = "new_row";




$('#DYN_PM_SB').setGridWidth(700);
$('#DYN_PM_SB').jqGrid('resizeGrid');


var dataGridColModel_DYN_PM_DHDQ =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'DHQ_NAME', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'数量', name:'DHQ', width:20, editable:false,
	      editrules:{number:true,
		  				  				},
		  		            editoptions:{dataEvents:[{type:'change',fn:function(e){DHQ_TOTAL_PRICECalculate(e,'DHQ');}}]},
		  		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'DHQ_UNION_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		                        editoptions:{dataEvents:[{type:'change',fn:function(e){DHQ_TOTAL_PRICECalculate(e,'DHQ_UNION_PRICE');}}]},
          		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'DHQ_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PM_DHDQUpdateColSata = function() {
        				        
        				        
        				        
        };

if (window.DYN_PM_DHDQ_comid == null || window.DYN_PM_DHDQ_comid == undefined || window.DYN_PM_DHDQ_comid == '') {
	window.DYN_PM_DHDQ_comid = id;
}
$('#DYN_PM_DHDQ').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PM_DHDQ',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PM_DHDQ_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f0a889d017f0ac42f710477",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PM_DHDQ,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                
                
                
        	forceFit:false
});



                    

                    	function DHQ_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PM_DHDQ').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PM_DHDQ').jqGrid("getRowData", rowid);
				var DHQ = Number(rowdata["DHQ"]);
				var DHQ_UNION_PRICE = Number(rowdata["DHQ_UNION_PRICE"]);
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = DHQ*DHQ_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PM_DHDQ').jqGrid("setCell",rowid,"DHQ_TOTAL_PRICE",calculateValue);
	}
    
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PM_DHDQ = 0;
var newRowStart_DYN_PM_DHDQ = "new_row";




$('#DYN_PM_DHDQ').setGridWidth(700);
$('#DYN_PM_DHDQ').jqGrid('resizeGrid');


var dataGridColModel_DYN_PM_KNDY =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'姓名', name: 'KNDY_NAME', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'金额', name:'KNDY_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PM_KNDYUpdateColSata = function() {
        				        
        };

if (window.DYN_PM_KNDY_comid == null || window.DYN_PM_KNDY_comid == undefined || window.DYN_PM_KNDY_comid == '') {
	window.DYN_PM_KNDY_comid = id;
}
$('#DYN_PM_KNDY').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PM_KNDY',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PM_KNDY_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f0a889d017f0ac42f710477",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PM_KNDY,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                
        	forceFit:false
});



            

            
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PM_KNDY = 0;
var newRowStart_DYN_PM_KNDY = "new_row";




$('#DYN_PM_KNDY').setGridWidth(700);
$('#DYN_PM_KNDY').jqGrid('resizeGrid');


var dataGridColModel_DYN_PM_BZ =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'名称', name: 'BZ_NAME', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'人数', name:'BZ_NUM', width:20, editable:false,
	      editrules:{number:true,
		  				  				},
		  		            editoptions:{dataEvents:[{type:'change',fn:function(e){BZ_TOTAL_PRICECalculate(e,'BZ_NUM');}}]},
		  		  		   formatter: 'number', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 0 		  , defaultValue: ""}
		  	  }
	           		  ,{label:'单价', name:'BZ_UNION_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		                        editoptions:{dataEvents:[{type:'change',fn:function(e){BZ_TOTAL_PRICECalculate(e,'BZ_UNION_PRICE');}}]},
          		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	           		  ,{label:'金额', name:'BZ_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_PM_BZUpdateColSata = function() {
        				        
        				        
        				        
        };

if (window.DYN_PM_BZ_comid == null || window.DYN_PM_BZ_comid == undefined || window.DYN_PM_BZ_comid == '') {
	window.DYN_PM_BZ_comid = id;
}
$('#DYN_PM_BZ').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_PM_BZ',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_PM_BZ_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f0a889d017f0ac42f710477",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_PM_BZ,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                
                
                
        	forceFit:false
});



                    

    	function BZ_TOTAL_PRICECalculate(e,colname){
		var rowid = $('#DYN_PM_BZ').jqGrid("getGridParam", "selrow");
		var rowdata = $('#DYN_PM_BZ').jqGrid("getRowData", rowid);
				var BZ_NUM = Number(rowdata["BZ_NUM"]);
				var BZ_UNION_PRICE = Number(rowdata["BZ_UNION_PRICE"]);
				if (rowdata[colname]==""){
			eval(colname+"=Number($(e.currentTarget).val())");
		}
		var calculateValue = BZ_NUM*BZ_UNION_PRICE;
		if (isNaN(calculateValue)){
			return false;
		}
		$('#DYN_PM_BZ').jqGrid("setCell",rowid,"BZ_TOTAL_PRICE",calculateValue);
	}
                    
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_PM_BZ = 0;
var newRowStart_DYN_PM_BZ = "new_row";




$('#DYN_PM_BZ').setGridWidth(700);
$('#DYN_PM_BZ').jqGrid('resizeGrid');


var dataGridColModel_DYN_QT =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
                 ,{ label:'项目', name: 'QT_XM', width:20, editable : false,
         		  		  	  	}
               		  ,{label:'金额', name:'QT_TOTAL_PRICE', width:20, editable:false,
		  editrules:{number:true,
			  minValue:0,			  },
		            		  		   formatter: 'currency', formatoptions: {decimalSeparator:".", thousandsSeparator: "",
		  		decimalPlaces: 2 		  ,prefix: "￥", suffix:"",defaultValue: ""}
		        }
	                   ,{ label:'外键', name: 'FK_SUB_COL_ID', width:100, editable : false,
                    hidden:true,
         		  		  	  	}
         ]


DYN_QTUpdateColSata = function() {
        				        
        };

if (window.DYN_QT_comid == null || window.DYN_QT_comid == undefined || window.DYN_QT_comid == '') {
	window.DYN_QT_comid = id;
}
$('#DYN_QT').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_QT',
    mtype: 'POST',
    datatype: "json",
    postData: {comId:window.DYN_QT_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"402811817f0a889d017f0ac42f710477",version:pageParams.version,pageParams:JSON.stringify(pageParams)},
    colModel:dataGridColModel_DYN_QT,
    scrollOffset: 20,
    altRows:true,
	height:'auto',
    pagerpos:'left',
    styleUI : 'Bootstrap',
	viewrecords: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
    cellsubmit: 'clientArray',
	loadonce:true,
	shrinkToFit:true,
                
        	forceFit:false
});



            

            
/**
 * 表格编辑参数
 */
var newRowIndex_DYN_QT = 0;
var newRowStart_DYN_QT = "new_row";




$('#DYN_QT').setGridWidth(700);
$('#DYN_QT').jqGrid('resizeGrid');





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

        $("input[type='hidden']").remove();
        // $("span").remove();
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
<script>
    // 自适应调整显示高度
    $(function () {
        $('textarea').each(function () {
            this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
        }).on('input', function () {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    });
</script>
</html>