<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form,table";
%>
<!DOCTYPE html>
<html>
<head>
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value="<c:out value='${partyActivistDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${partyActivistDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="userIdAlias">姓名:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="userId" name="userId" value="<c:out value='${partyActivistDTO.userId}'/>">
							<input class="form-control" type="text" id="userIdAlias" name="userIdAlias" readonly="readonly" value="<c:out value='${partyActivistDTO.userIdAlias}'/>">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
   					</td>
					<th width="15%">
						<label for="deptIdAlias">一级部门:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="deptId" name="deptId" value="<c:out value='${partyActivistDTO.deptId}'/>">
							<input class="form-control" type="text" id="deptIdAlias" name="deptIdAlias" readonly="readonly" value="<c:out value='${partyActivistDTO.deptIdAlias}'/>">
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyId">党支部:</label></th>
					<td>
						<div class="input-group input-group-sm">
						<input type="hidden" name="partyId"  id="partyId" value="<c:out value='${partyActivistDTO.partyId}'/>">
						<input class="form-control" placeholder="请选择党支部" type="text" id="partyIdAlias" name="partyIdAlias" value="<c:out value='${partyActivistDTO.partyIdAlias}'/>">
							<span class="input-group-addon">
								<i class=" glyphicon glyphicon-pencil"></i>
							</span>
							</div>
   					</td>
   					<th>
						<label for="attribute01Alias">所在党小组:</label>
					</th>
					<td>
					<div class="input-group input-group-sm">
						<input type="hidden" name="attribute01"  id="attribute01" value="<c:out value='${partyMemberDTO.attribute08}'/>"/>
						<input class="form-control" placeholder="请选择党小组" type="text" id="attribute01Alias" name="attribute01Alias" value="<c:out value='${attribute08Alias}'/>">
							<span class="input-group-addon">
								<i class=" glyphicon glyphicon-pencil"></i>
							</span>
							</div>
   					</td>
   					

				</tr>
    			<tr>
					<th>
						<label for="sex">性别:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="sex" id="sex" title="" isNull="true" lookupCode="PLATFORM_SEX" defaultValue="${partyActivistDTO.sex}" />
   					</td>
   									<th>
						<label for="userCode">人员编码:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="userCode"  id="userCode" value="<c:out value='${partyActivistDTO.userCode}'/>">
   					</td>
				</tr>
				<tr>
					<th>
						<label for="attribute06">联系电话:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attribute06"  id="attribute06" value="<c:out value='${partyActivistDTO.attribute06}'/>">
   					</td>					<th>
						<label for="birthday">出生年月:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="birthday" id="birthday" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyActivistDTO.birthday}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
				<tr>
					<th><label for="attribute01">年龄:</label></th>
					<td>	<input class="form-control input-sm" type="text"
						name="attribute01" id="attribute01" value="<c:out value='${partyActivistDTO.attribute01}'/>" disabled="disabled"></td>
					<th><label for="attribute02">教育类别:</label></th>
					<td>	<pt6:h5select css_class="form-control input-sm" name="attribute02"
							id="attribute02" title="" isNull="true" lookupCode="PA_EDUCATION_TYPE" defaultValue="${partyActivistDTO.attribute02}"/></td>
				</tr>
    			<tr>
					<th>
						<label for="nation">民族:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="nation"  id="nation" value="<c:out value='${partyActivistDTO.nation}'/>">
   					</td>
					<th>
						<label for="orign">籍贯:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="orign"  id="orign" value="<c:out value='${partyActivistDTO.orign}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="educationLevel">文化程度:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="educationLevel" id="educationLevel" title="" isNull="true" lookupCode="PA_EDUCATION_LEVEL" defaultValue="${partyActivistDTO.educationLevel}" />
   					</td>
					<th>
						<label for="idcard">身份证号:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="idcard"  id="idcard" value="<c:out value='${partyActivistDTO.idcard}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="professionalRank">职称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="professionalRank"  id="professionalRank" value="<c:out value='${partyActivistDTO.professionalRank}'/>">
   					</td>
							<th><label for="attribute03">职称等级:</label></th>
					<td>	<pt6:h5select css_class="form-control input-sm" name="attribute03" id="attribute03" title="" isNull="true" lookupCode="PA_PROFESSIONAL_RANK_LEVEL" defaultValue="${partyActivistDTO.attribute03}"/></td>
				</tr>
				<tr>
   										<th>
						<label for="attribute07">出生地:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attribute07"  id="attribute07" value="<c:out value='${partyActivistDTO.attribute07}'/>">
   					</td>
   					<th>
						<label for="attribute05">身份类别:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="attribute05" id="attribute05" title="" isNull="true" lookupCode="PA_CATEGORY" defaultValue="${partyActivistDTO.attribute05}" />
   					</td>
					
				</tr>
					<tr>
					<th>
						<label for="post">职务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="post"  id="post" value="<c:out value='${partyActivistDTO.post}'/>">
   					</td>
					<th>
						<label for="introducer">培养联系人:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="introducer"  id="introducer" value="<c:out value='${partyActivistDTO.introducer}'/>">
   					</td>
					
				</tr>
    			<tr>
					<!--  <th>
						<label for="attribute11">毕业时间:</label></th>
					<td>
					<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="attribute11" id="attribute11" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyActivistDTO.attribute11}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>-->
							<th>
						<label for="partyMembers">所在班组党员数:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="partyMembers" id="partyMembers"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0" value="<c:out value='${partyActivistDTO.partyMembers}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
						
   					</td>
					<th>
						<label for="workTime">参加工作时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="workTime" id="workTime" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyActivistDTO.workTime}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="activistType">积极分子类别:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="activistType" id="activistType" title="" isNull="true" lookupCode="PA_PARTY_TYPE" defaultValue="${partyActivistDTO.activistType}" />
   					</td>
					<th>
						<label for="reqpartyTime">申请入党时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="reqpartyTime" id="reqpartyTime" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyActivistDTO.reqpartyTime}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="fixactivistTime">确定积极分子时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="fixactivistTime" id="fixactivistTime" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyActivistDTO.fixactivistTime}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="fixstressTime">确定重点培养时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="fixstressTime" id="fixstressTime" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyActivistDTO.fixstressTime}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="fixtargetTime">确定发展对象时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="fixtargetTime" id="fixtargetTime" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyActivistDTO.fixtargetTime}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="leagueMember">团员:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="leagueMember" id="leagueMember" title="" isNull="true" lookupCode="PA_YN_LEAGUE" defaultValue="${partyActivistDTO.leagueMember}" />
   					</td>
				</tr>
    			
				<tr>
										<th>
						<label for="attribute04">技能等级:</label></th>
					<td>
								<pt6:h5select css_class="form-control input-sm" name="attribute04" id="attribute04" title="" isNull="true" lookupCode="PA_SKILL_LEVEL" defaultValue="${partyActivistDTO.attribute04}" />
   					</td>
				
				<th>
						<label for="status">是否有效:</label>
					</th>
					<td>
					<pt6:h5select css_class="form-control input-sm" name="status"  id="status" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" defaultValue="${partyActivistDTO.status}"/>
			
   					</td>
				
				</tr>
			</table>
		</form>
			<!-- 子表表格 -->
		<ul id="myTab" class="nav nav-tabs">
			<!-- <li ><a id="activistAchievementA"
				href="#activistAchievement" data-toggle="tab"
				data-type="dgActivistAchievement"
				data-table="activistAchievementEditJqGrid">积极分子突出工作业绩及获奖情况</a></li>-->
			<li class="active"> <a id="activistMeritsA" href="#activistMerits"
				data-toggle="tab" data-type="dgActivistMerits"
				data-table="activistMeritsEditJqGrid">近两年绩效考核成绩</a></li>
		</ul>
		<div id="myTabContent" class="tab-content">
			<!--  <div id="activistAchievement" class="tab-pane fade ">
		
				<table id="activistAchievementEditJqGrid"></table>
			</div>-->
			<div id="activistMerits" class="tab-pane fade in active">
			
				<table id="activistMeritsEditJqGrid"></table>



			</div>
		</div>
	</div>
	<div data-options="region:'south',border:false" style="height: 60px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="partyActivist_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script src="avicit/pb/activist/activistachievement/js/ActivistAchievementEdit.js" type="text/javascript"></script>
		<script
		src="avicit/pb/activist/activistmerits/js/ActivistMeritsEdit.js"
		type="text/javascript"></script>
	<script type="text/javascript">
		var activistAchievementEdit;
		var activistMeritsEdit;
		var meritsMap = ${meritsMap};
		function closeForm(){
			parent.partyActivist.closeDialog("detail");
		}

        //清空日期值
        function clearCommonSelectValue(element) {
            $(element).siblings("input").val("");
        }

		$(document).ready(function (){
			//返回按钮绑定事件
			$('#partyActivist_closeForm').bind('click', function(){
				closeForm();
			});
			
			var activistAchievementDataEditGridColModel = [ {
				label : 'id',
				name : 'id',
				key : true,
				width : 75,
				hidden : true
			}, 
			/*{
				label : '年份',
				name : 'attribute01',
				width : 150,
				align : 'center',
		        hidden : true
			},{
				label : '年份',
				name : 'attribute01Name',
				width : 150,
				align : 'center',
				//editable : true,
				edittype:"custom",
                editoptions: {
                        custom_element:selectElem,
                        custom_value:selectValue,
                        forId:'attribute01',
                        value: meritsMap.yearData
                }
			},*/
			{
				label : '年份',
				name : 'attribute01',
				width : 150,
				align : 'center',
				editable : true,
				edittype:"custom",
                editoptions: {
                    custom_element:dateYearElem,
                    custom_value:dateYearValue
                }
			},
			{
				label : '获得奖项',
				name : 'awards'
			} ];

		
			//
			var activistMeritsDataEditGridColModel = [ {
				label : 'id',
				name : 'id',
				key : true,
				width : 75,
				hidden : true
			},
			/*{
				label : '年份',
				name : 'attribute01',
				width : 150,
				align : 'center',
		        hidden : true
			},{
				label : '年份',
				name : 'attribute01Name',
				width : 150,
				align : 'center',
				//editable : true,
				edittype:"custom",
                editoptions: {
                        custom_element:selectElem,
                        custom_value:selectValue,
                        forId:'attribute01',
                        value: meritsMap.yearData
                }
			},*/
			{
				label : '年份',
				name : 'attribute01',
				width : 150,
				align : 'center',
				editable : true,
				edittype:"custom",
                editoptions: {
                    custom_element:dateYearElem,
                    custom_value:dateYearValue
                }
			},
			{
				label : '绩效',
				name : 'merits',
				width : 150,
				align : 'center',
		        hidden : true
			},{
				label : '绩效',
				name : 'meritsName',
				width : 150,
				align : 'center',
				//editable : true,
				edittype:"custom",
                editoptions: {
                        custom_element:selectElem,
                        custom_value:selectValue,
                        forId:'merits',
                        value: meritsMap.meritsData
                }
			}, {
				label : '类别',
				name : 'type',
				width : 150,
				align : 'center',
			    hidden : true
			},  {
				label : '类别',
				name : 'typeName',
				width : 150,
				align : 'center',
				//editable : true,
				edittype:"custom",
                editoptions: {
                        custom_element:selectElem,
                        custom_value:selectValue,
                        forId:'type',
                        value: meritsMap.typeData
                }
			},{
				label : '排名',
				name : 'position',
				width : 150,
				align : 'center'
			} ];
			activistMeritsEdit = new ActivistMeritsEdit(
					'activistMeritsEditJqGrid',
					'${activistMeritsEditUrl}',
					activistMeritsDataEditGridColModel,'${partyActivistDTO.id}');
			activistAchievementEdit= new ActivistAchievementEdit('activistAchievementEditJqGrid','${activistAchievementEditUrl}',activistAchievementDataEditGridColModel,'${partyActivistDTO.id}');
			$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
				if(e.target && e.target.id && e.target.id == 'activistMeritsA'){
					$('#activistMeritsEditJqGrid').setGridWidth($(window).width());
				}
				
			  });
		});
		//form控件禁用
		setFormDisabled();
		$(document).keydown(function(event){  
			event.returnValue = false;
			return false;
		});
	</script>
</body>
</html>

