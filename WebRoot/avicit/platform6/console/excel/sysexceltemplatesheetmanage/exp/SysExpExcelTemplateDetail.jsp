<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form,fileupload";
%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<head>
<!-- ControllerPath = "demo/demoreception/demoReceptionController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body class="easyui-layout">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value="${sysImpTemplateDTO.id}"/>
			<input type="hidden" name="type" value="${sysImpTemplateDTO.type}"/>
			<input type="hidden" name="version" value="${sysImpTemplateDTO.version}"/>
			<table class="form_commonTable">
				<tr>
					<th width="10%"><label for="code">编码:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="code" id="code" value="${sysImpTemplateDTO.code}" readonly="readonly" /></td>
					<th width="10%"><label for="name">名称:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="name" id="name" value="${sysImpTemplateDTO.name}" readonly="readonly"/></td>
				</tr>
				<tr>
					<th width="10%"><label for="dtoClazz">实体类:</label></th>
					<td width="39%" colspan="3">
						<div class="input-group input-group-sm" style="width:100%;">
							<input class="form-control input-sm" type="text" name="dtoClazz" id="dtoClazz" value="${sysImpTemplateDTO.dtoClazz}" readonly="readonly"/>
							<%--<span class="input-group-addon" id="dataSourceBtn"><i class="glyphicon glyphicon-th-list"></i></span>--%>
						</div>
					</td>
				</tr>
                <tr class="titleTr">
                    <th width="10%"><label for="isShowTitle">是否显示标题:</label></th>
                    <td width="39%">
                        <label class="radio-inline"> <input name="isShowTitle" title="是" type="radio" value="1" >是</label>
                        <label class="radio-inline"> <input name="isShowTitle" title="否" type="radio" value="0" >否</label>
                    </td>
                    <th width="10%"><label for="title">标题:</label></th>
                    <td width="39%"><input class="form-control input-sm"  type="text" name="title" id="title" value="${sysImpTemplateDTO.title}" readonly="readonly"/></td>
                </tr>
                <tr>
					<th width="10%"><label for="bz">描述:</label></th>
					<td width="39%" colspan="3"><textarea class="form-control input-sm" rows="5"  type="text" name="bz" id="bz" readonly="readonly">${sysImpTemplateDTO.bz}</textarea></td>
				</tr>
			</table>
		</form>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script type="text/javascript">
		 //选择配置方式事件
        $("input[name='isShowTitle']").on("click",function(){
            var selectVal = this.value;
            if(selectVal == "1"){ // 显示标题
                $(".titleTr").find("th:eq(1)").show();
                $(".titleTr").find("td:eq(1)").show();
            } else if(selectVal == "0"){ // 不显示标题
                $(".titleTr").find("th:eq(1)").hide();
                $(".titleTr").find("td:eq(1)").hide();
                $("#title").val("");
            }
        });

        $("input[name='isShowTitle']").each(function(i,n){
            if(n.value == "${sysImpTemplateDTO.isShowTitle}"){
                $(this).click();
            }
            $(this).attr("disabled","disabled");
        });
	</script>
</body>
</html>