<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<% 
String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
</HEAD>
<BODY>
	<form id='form'>
		<input type="hidden" name="id" />
		<table class="form_commonTable">
			<tr>
				<th width="10%" style="word-break: break-all; word-warp: break-word;">菜单编码:</th>
				<td width="39%">
					<pt6:h5select css_class="form-control" name="secretLevel" isNull="true" lookupCode="PLATFORM_USER_SECRET_LEVEL"></pt6:h5select>
				</td>
				
			</tr>
			<tr>
				<th width="10%" style="word-break: break-all; word-warp: break-word;">图标:</th>
				<td width="39%"><pt6:h5checkbox css_class="checkbox-inline" name="education" title="毕业院校" canUse="0" lookupCode="PLATFORM_DEGREE" /></td>

			</tr>

			<tr>
				<th width="10%" style="word-break: break-all; word-warp: break-word;">菜单名称:</th>
				<td width="39%"><pt6:h5radio  css_class="radio-inline" name="sex" title="性别" canUse="0" lookupCode="PLATFORM_SEX" /></td>
			</tr>
            <tr>
				<th width="10%" style="word-break: break-all; word-warp: break-word;">多位通用代码:</th>
				<td>
					<select id="sysLookupHiberarchy_0" class="form-control lookupHiberarchy"  data-lookupCodeType="AREA" style="width:100px;float:left;" >
					   <option value="0">请选择</option>
					</select>
				</td>
			</tr> 
			<tr>
			    <th width="10%" style="word-break: break-all; word-warp: break-word;">获取多位通用代码值:</th>
			    <td>
					<input type="button" value="set" style="float:left;" onclick="setDatas();"><input type="button" value="get" style="float:left;" onclick="getDatas();"><input type="text"  id="showSelectValue" style="width:300px;float:left;" />
			   </td>
			</tr>
		</table>
	</form>
</BODY>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="/pt6/static/h5/avicCascadeSelect/avictCascade.js" ></script>
<script id="script_e10">
$(document).ready(function() {
	$('#sysLookupHiberarchy_0').cascadeSelect({
		baseUrl:'console/LookupHiberarchy', //controller路径
        baseMethodTopUrl:'/searchTopLookupType/', //初始化一级通用代码controller方法的路径
        baseMethodNextUrl:'/searchNextlookuptype/'//查找下一级通用代码controller方法的路径
	});
	
});
//get
function getDatas(){
	var arr = $('#sysLookupHiberarchy_0').cascadeSelect('getSelectData');
	var strValue="";
	var strText="";
	for(var i = 0;i<arr.length;i++){
		if(arr[i].lookTypeText  != '请选择'){
			strValue += arr[i].lookTypeValue;
			strText  += arr[i].lookTypeText;
			if(i < arr.length-1){
				strValue+="&";
				strText+="-";
			}	
		}
	}
	$('#showSelectValue').val(strText);
}
//set
function setDatas(){
	var arr = [{lookTypeText:"陕西省",lookTypeValue:"402888045c76d70a015c76dcac52013f"},{lookTypeText:"西安市",lookTypeValue:"402888045c76d70a015c76df07e4015f"},{lookTypeText:"雁塔区",lookTypeValue:"402888045c76e638015c76f088820185"}];
	$('#sysLookupHiberarchy_0').cascadeSelect('setSelectData',arr);
}
/*$(document).ready(function() {
	$.ajax({
        cache: true,
        type: "post",
        url: "h5/view/common/commonController/getLookupByTypes",
        dataType:"json",
        data:{lookupTypes:JSON.stringify(["PLATFORM_FOLK","PLATFORM_SEX"])},
        async: false,
        error: function(request) {
        	throw new Error('操作失败，服务请求状态：'+request.status+' '+request.statusText+' 请检查服务是否可用！');
        },
        success: function(data) {
			if(data){
				//$.fn.select2.defaults.set("lookupCode", "lookupName");
				$("#PLATFORM_FOLK").select2({
				    data: data["PLATFORM_FOLK"]
				});
				$("#PLATFORM_SEX").select2({
				    data: data["PLATFORM_SEX"]
				});
			}
        }
    });
});  */
		
	</script>
</HTML>