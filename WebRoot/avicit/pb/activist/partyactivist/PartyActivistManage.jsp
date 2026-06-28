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
<!-- ControllerPath = "platform/avicit/pb/activist/partyActivist/partyActivistController/toPartyActivistManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

<style type="text/css">
.tab .nav-tabs{
	width:100%;
}
</style>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',onResize:function(a,b){resizeSouth(a,b);}">
		<div id="partyActivistTableToolbar" class="toolbar" style="min-width:580px">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyActivist_button_add" permissionDes="添加">
			  		<a id="partyActivist_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyActivist_button_edit" permissionDes="编辑">
					<a id="partyActivist_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyActivist_button_delete" permissionDes="删除">
					<a id="partyActivist_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyActivist_button_export" permissionDes="导出">
					<a id="partyActivist_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyActivist_button_import" permissionDes="导入">
			<a id="partyActivist_import" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导入"><i class="icon iconfont icon-Import"></i> 导入</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyActivist_button_party_member" permissionDes="一键转党员">
			<a id="partyMember" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="一键转党员"><i class="icon icon iconfont icon-star-fill icon-Import"></i>一键转党员</a>
		</sec:accesscontrollist>
			</div>
		    <div class="toolbar-right">
			    <div class="input-group form-tool-search">
		     		<input type="text" name="partyActivist_keyWord" id="partyActivist_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
		     		<label id="partyActivist_searchPart" class="icon icon-search form-tool-searchicon"></label>
		   		</div>
		   		<div class="input-group-btn form-tool-searchbtn">
		   			<a id="partyActivist_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
		   		</div>
		    </div>
		</div>					
		<table id="partyActivistJqGrid"></table>
		<div id="partyActivistJqGridPager"></div>
	</div>
	 	<!-- <div data-options="region:'south',split:true,height:fixheight(.5),onResize:function(a){$('#activistAchievementJqGrid').setGridHeight($(window).height()/2-120);$(window).trigger('resize');}">
		<div id="activistAchievementTableToolbar" class="toolbar" style="min-width:580px">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_activistAchievement_button_export" permissionDes="导出">
					<a id="activistAchievement_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
				</sec:accesscontrollist>
			</div>
			<div class="toolbar-right">
			    <div class="input-group form-tool-search">
		     		<input type="text" name="activistAchievement_keyWord" id="activistAchievement_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
		     		<label id="activistAchievement_searchPart" class="icon icon-search form-tool-searchicon"></label>
		   		</div>
		   		<div class="input-group-btn form-tool-searchbtn">
		   			<a id="activistAchievement_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
		   		</div>
		    </div>
		</div>					
		<table id="activistAchievementJqGrid"></table>
		<div id="activistAchievementJqGridPager"></div>
	</div>
<div data-options="region:'south',split:true,height:fixheight(.5),onResize:function(a){$('#activistMeritsJqGrid').setGridHeight($(window).height()/2-120);$(window).trigger('resize');}">
		<div id="activistMeritsTableToolbar" class="toolbar" style="min-width:580px">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_activistMerits_button_export" permissionDes="导出">
					<a id="activistMerits_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
				</sec:accesscontrollist>
			</div>
			<div class="toolbar-right">
			    <div class="input-group form-tool-search">
		     		<input type="text" name="activistMerits_keyWord" id="activistMerits_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
		     		<label id="activistMerits_searchPart" class="icon icon-search form-tool-searchicon"></label>
		   		</div>
		   		<div class="input-group-btn form-tool-searchbtn">
		   			<a id="activistMerits_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
		   		</div>
		    </div>
		</div>					
		<table id="activistMeritsJqGrid"></table>
		<div id="activistMeritsJqGridPager"></div>
	</div>-->
	<div data-options="region:'south',split:true,height:fixheight(.5),onResize:function(a){$('#activistAchievementJqGrid').setGridHeight($(window).height()/2-155);$(window).trigger('resize');}" style="overflow: hidden">
    <ul id="myTab" class="nav nav-tabs">
                                            <!--  <li ><a id="activistAchievementA"  href="#activistAchievement" data-toggle="tab" data-type="dgActivistAchievement" data-table="activistAchievementJqGrid">积极分子突出工作业绩及获奖情况</a></li>-->
                                                <li class="active"><a id="activistMeritsA"  href="#activistMerits" data-toggle="tab" data-type="dgActivistMerits" data-table="activistMeritsJqGrid" >近两年绩效考核成绩</a></li>
                        </ul>
    <div id="myTabContent" class="tab-content">
                            <!-- <div id="activistAchievement" class="tab-pane fade">
                <div id="activistAchievementTableToolbar" class="toolbar">
                                        <div class="toolbar-right">
                                                <div class="input-group form-tool-search">
                            <input type="text" name="activistAchievement_keyWord" id="activistAchievement_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
                            <label id="sub_searchPart" class="icon icon-search form-tool-searchicon"></label>
                        </div>
                        <div class="input-group-btn form-tool-searchbtn">
                            <a id="activistAchievement_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
                        </div>
                    </div>
                </div>
                <table id="activistAchievementJqGrid"></table>
                <div id="activistAchievementJqGridPager"></div>
            </div>-->
                                <div id="activistMerits" class="tab-pane fade in active">
                 <div id="activistMeritsTableToolbar" class="toolbar">
                                        <div class="toolbar-right">
                                                <div class="input-group form-tool-search">
                            <input type="text" name="activistMerits_keyWord" id="activistMerits_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
                            <label id="sub_searchPart" class="icon icon-search form-tool-searchicon"></label>
                        </div>
                        <div class="input-group-btn form-tool-searchbtn">
                            <a id="activistMerits_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
                        </div>
                    </div>
                </div>
                <table id="activistMeritsJqGrid"></table>
                <div id="activistMeritsJqGridPager"></div>
            </div>
                        </div>
</div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="userIdAlias">姓名ID:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
						<input type="hidden"  id="userId" name="userId">
						<input class="form-control" placeholder="请选择用户" type="text" id="userIdAlias" name="userIdAlias">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-user"></i>
						</span>
					</div>
				</td>
				<th width="10%">
					<label for="deptIdAlias">部门ID:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
						<input type="hidden"  id="deptId" name="deptId">
						<input class="form-control" placeholder="请选择部门" type="text" id="deptIdAlias" name="deptIdAlias" >
						<span class="input-group-addon">
						<i class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="partyId">党支部:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input type="hidden" name="partyId"  id="partyId" />
						<input class="form-control" placeholder="请选择党支部" type="text" id="partyIdAlias" name="partyIdAlias">
							<span class="input-group-addon">
								<i class=" glyphicon glyphicon-pencil"></i>
							</span>
							</div>
				</td>
				<th>
					<label for="userCode">人员编码:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userCode"  id="userCode" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="sex">性别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="sex" id="sex" title="" isNull="true" lookupCode="PLATFORM_SEX" />
				</td>
				<th>
					<label for="birthdayBegin">出生年月起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="birthdayBegin" id="birthdayBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="birthdayEnd">出生年月止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="birthdayEnd" id="birthdayEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="nation">民族:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="nation"  id="nation" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="orign">籍贯:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="orign"  id="orign" />
				</td>
				<th>
					<label for="educationLevel">文化程度:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="educationLevel" id="educationLevel" title="" isNull="true" lookupCode="PA_EDUCATION_LEVEL" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="idcard">身份证号:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="idcard"  id="idcard" />
				</td>
				<th>
					<label for="professionalRank">职称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="professionalRank"  id="professionalRank" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="post">职务:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="post"  id="post" />
				</td>
				<th>
					<label for="introducer">培养联系人:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="introducer"  id="introducer" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="workTimeBegin">参加工作时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="workTimeBegin" id="workTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="workTimeEnd">参加工作时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="workTimeEnd" id="workTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="activistType">积极分子类别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="activistType" id="activistType" title="" isNull="true" lookupCode="PA_PARTY_TYPE" />
				</td>
				<th>
					<label for="reqpartyTimeBegin">申请入党时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="reqpartyTimeBegin" id="reqpartyTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="reqpartyTimeEnd">申请入党时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="reqpartyTimeEnd" id="reqpartyTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="fixactivistTimeBegin">确定积极分子时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fixactivistTimeBegin" id="fixactivistTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="fixactivistTimeEnd">确定积极分子时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fixactivistTimeEnd" id="fixactivistTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="fixstressTimeBegin">确定重点培养时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fixstressTimeBegin" id="fixstressTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="fixstressTimeEnd">确定重点培养时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fixstressTimeEnd" id="fixstressTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="fixtargetTimeBegin">确定发展对象时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fixtargetTimeBegin" id="fixtargetTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="fixtargetTimeEnd">确定发展对象时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fixtargetTimeEnd" id="fixtargetTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="leagueMember">团员:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="leagueMember" id="leagueMember" title="" isNull="true" lookupCode="PA_YN_LEAGUE" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="partyMembers">所在班组党员数:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="partyMembers" id="partyMembers" data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
				<th>
					<label for="status">是否有效:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="status" id="status" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" />
				</td>
				</tr>
			
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<!-- 子表高级查询begin -->
<div id="activistAchievementSearchDialog" style="overflow: auto;display: none">
	<form id="activistAchievementForm" style="padding: 10px;">
		<input type="hidden" name="paId" id="paIdActivistAchievement" />
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="yearBeginActivistAchievement">年份起:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="yearBegin" id="yearBeginActivistAchievement" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th width="10%">
					<label for="yearEndActivistAchievement">年份止:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="yearEnd" id="yearEndActivistAchievement" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="awardsActivistAchievement">获得奖项:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="awards"  id="awardsActivistAchievement" />
				</td>
				</tr>
    	</table>
	</form>
</div>
<div id="activistMeritsSearchDialog" style="overflow: auto;display: none">
	<form id="activistMeritsForm" style="padding: 10px;">
		<input type="hidden" name="paId" id="paIdActivistMerits" />
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="yearBeginActivistMerits">年份起:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="yearBegin" id="yearBeginActivistMerits" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th width="10%">
					<label for="yearEndActivistMerits">年份止:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="yearEnd" id="yearEndActivistMerits" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="meritsActivistMerits">绩效:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="merits" id="meritsActivistMerits" title="" isNull="true" lookupCode="PA_MERITS" />
				</td>
				<th>
					<label for="typeActivistMerits">类别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="type" id="typeActivistMerits" title="" isNull="true" lookupCode="PA_PARTY_TYPE" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="positionActivistMerits">排名:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="position" id="positionActivistMerits" data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
				</tr>
    	</table>
	</form>
</div>
<!-- 子表高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/activist/activistmerits/js/ActivistMerits.js?v=${jsversion}" type="text/javascript"></script>
<script src="avicit/pb/activist/partyactivist/js/PartyActivist.js?v=${jsversion}" type="text/javascript"></script>
<script src="avicit/pb/activist/activistachievement/js/ActivistAchievement.js?v=${jsversion}" type="text/javascript"></script>

<script type="text/javascript">
var partyActivist;
var activistAchievement;
function formatValueActivistAchievement(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="activistAchievement.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHrefActivistAchievement(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="activistAchievement.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
var activistMerits;
function formatValueActivistMerits(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="activistMerits.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHrefActivistMerits(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="activistMerits.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="partyActivist.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="partyActivist.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}

$(document).ready(function () {
	var activistAchievementDataGridColModel =  [
			{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
        	{ label : '年份', name : 'attribute01',width: 150,align: 'center'},
			{ label : '获得奖项', name : 'awards', width: 150,align: 'left'}
	];
	var activistMeritsDataGridColModel =  [
			{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
        	{ label : '年份', name : 'attribute01',width: 150,align: 'center'},
			{ label : '绩效', name : 'meritsName',width: 150,align: 'center'},
			{ label : '类别', name : 'typeName',width: 150,align: 'center'},
			{ label : '排名', name : 'position', width: 150,align: 'center'}
	];
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '姓名', name : 'userIdAlias',formatter:formatValue,width: 150,align: 'center'},
		{ label : '部门', name : 'deptIdAlias',width: 150,align: 'center'},
		{ label : '党支部', name : 'partyIdAlias',width: 150,align: 'center'},
		{ label : '人员编码', name : 'userCode',width: 150,align: 'center'},
		{ label : '性别', name : 'sexName',width: 150,align: 'center'},
		//{ label : '出生年月', name : 'birthday', formatter : format,width: 150,align: 'center'},
		{ label : '民族', name : 'nation',width: 150,align: 'left'},
		{ label : '籍贯', name : 'orign',width: 150,align: 'left'},
		{ label : '文化程度', name : 'educationLevelName',width: 150,align: 'center'},
		{ label : '身份证号', name : 'idcard',width: 150,align: 'left'},
		{ label : '职称', name : 'professionalRank',width: 150,align: 'left'},
		{ label : '职务', name : 'post',width: 150,align: 'left'},
		//{ label : '培养联系人', name : 'introducer',width: 150,align: 'left'},
		{ label : '参加工作时间', name : 'workTime', formatter : format,width: 150,align: 'center'},
		{ label : '积极分子类别', name : 'activistTypeName',width: 150,align: 'center'},
		{ label : '申请入党时间', name : 'reqpartyTime', formatter : format,width: 150,align: 'center'},
		{ label : '确定积极分子时间', name : 'fixactivistTime', formatter : format,width: 150,align: 'center'},
		//{ label : '确定重点培养时间', name : 'fixstressTime', formatter : format,width: 150,align: 'center'},
		//{ label : '确定发展对象时间', name : 'fixtargetTime', formatter : format,width: 150,align: 'center'},
		//{ label : '团员', name : 'leagueMemberName',width: 150,align: 'center'},
		{ label : '所在班组党员数', name : 'partyMembers', width: 150,align: 'right'},
		{ label : '是否有效', name : 'statusName', width: 150, align: 'left'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("userIdAlias");
	searchTips.push("姓名");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	$('#partyActivist_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	var activistAchievementSearchNames = new Array();
	var activistAchievementSearchTips = new Array();
	activistAchievementSearchNames.push("awards");
	activistAchievementSearchTips.push("获得奖项");
	var activistAchievementSearchC = activistAchievementSearchTips.length == 2 ? '或' + activistAchievementSearchTips[1] : "";
	$('#activistAchievement_keyWord').attr('placeholder','请输入' + activistAchievementSearchTips[0] + activistAchievementSearchC);
	//查询按钮绑定事件
	$('#activistAchievement_searchPart').bind('click', function(){
		activistAchievement.searchByKeyWord();
	});
	//打开高级查询框
	$('#activistAchievement_searchAll').bind('click', function(){
		activistAchievement.openSearchForm(this);
	});
	//导出Excel
	$('#activistAchievement_export').bind('click',function(){		
		var ids = $("#activistAchievementJqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#activistAchievementJqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#activistAchievementForm")));
		
		new SysExcelExport("testActivistAchievement",true,"${activistAchievementUrl}exportExcel",JSON.stringify(selectIds),selectConditions);
	})
	var activistMeritsSearchNames = new Array();
	var activistMeritsSearchTips = new Array();
	var activistMeritsSearchC = activistMeritsSearchTips.length == 2 ? '或' + activistMeritsSearchTips[1] : "";
	activistMeritsSearchNames.push("meritsName");
	activistMeritsSearchTips.push("绩效");
	$('#activistMerits_keyWord').attr('placeholder','请输入' + activistMeritsSearchTips[0] + activistMeritsSearchC);
	//查询按钮绑定事件
	$('#activistMerits_searchPart').bind('click', function(){
		activistMerits.searchByKeyWord();
	});
	//打开高级查询框
	$('#activistMerits_searchAll').bind('click', function(){
		activistMerits.openSearchForm(this);
	});
	//导出Excel
	$('#activistMerits_export').bind('click',function(){
		var ids = $("#activistMeritsJqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#activistMeritsJqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#activistMeritsForm")));
		new SysExcelExport("testActivistMerits",true,"${activistMeritsUrl}exportExcel",JSON.stringify(selectIds),selectConditions);
	})
	//实例化主表对象
	partyActivist = new PartyActivist('partyActivistJqGrid','${url}','searchDialog','form','partyActivist_keyWord',searchNames,dataGridColModel);
	partyActivist.setOnLoadSuccess(function(pid) {
		if(activistAchievement == null){
			activistAchievement = new ActivistAchievement('activistAchievementJqGrid','${activistAchievementUrl}','activistAchievementSearchDialog','activistAchievementForm','activistAchievement_keyWord',activistAchievementSearchNames,activistAchievementDataGridColModel,pid);
		}else{
			activistAchievement.loadByPid(pid);
		}
		if(activistMerits == null){
			activistMerits = new ActivistMerits('activistMeritsJqGrid','${activistMeritsUrl}','activistMeritsSearchDialog','activistMeritsForm','activistMerits_keyWord',activistMeritsSearchNames,activistMeritsDataGridColModel,pid);
		}else{
			activistMerits.loadByPid(pid);
		}
	});
	partyActivist.setOnSelectRow(function(pid) {
		activistAchievement.loadByPid(pid);
		activistMerits.loadByPid(pid);
	});
	//添加按钮绑定事件
	$('#partyActivist_insert').bind('click', function(){
		partyActivist.insert();
	});
	//编辑按钮绑定事件
	$('#partyActivist_modify').bind('click', function(){
		partyActivist.modify();
	});
	//删除按钮绑定事件
	$('#partyActivist_del').bind('click', function(){  
		partyActivist.del();
	});
	//查询按钮绑定事件
	$('#partyActivist_searchPart').bind('click', function(){
		partyActivist.searchByKeyWord();
	});
	//打开高级查询框
	$('#partyActivist_searchAll').bind('click', function(){
		partyActivist.openSearchForm(this);
	});
	//导出Excel
	$('#partyActivist_export').bind('click',function(){
		var ids = $("#partyActivistJqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#partyActivistJqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("partyActivist",true,"${url}exportExcel",JSON.stringify(selectIds),selectConditions);
	})
	//一键转党员的点击事件
	$("#partyMember").bind('click',function(e){
		var rows = $("#partyActivistJqGrid").jqGrid('getGridParam','selarrrow');
		if(rows.length==0){
			layer.msg('请选择需要转党员的积极分子！');
			return;
		}
		layer.confirm('确认要将选中的积极分子转为党员吗?', {
			icon : 3,
			title : "提示",
			area : [ '400px', '' ]
		}, function(index) {
			avicAjax.ajax({
				url : '${url}partyMeber',
				data : JSON.stringify(rows),
				contentType : 'application/json',
				type : 'post',
				dataType : 'json',
				success : function(r) {
					if (r.flag == "success") {
						layer.msg('积极分子转党员成功！');
						$('#partyActivistJqGrid').trigger("reloadGrid");
						
					} else {
						layer.alert('积极分子转党员失败,错误信息:'+r.msg, {
							icon : 7,
							area : [ '400px', '' ],
							closeBtn : 0,
							btn : [ '关闭' ],
							title : "提示"
						});
					}
				}
			});
			layer.close(index);
		});
	})
	$('#userIdAlias${subTableRelation.objectNameUpCase}').on('focus',function(e){
		new H5CommonSelect({type:'userSelect', idFiled:'userId${subTableRelation.objectNameUpCase}',textFiled:'userIdAlias${subTableRelation.objectNameUpCase}'});
		this.blur();
		nullInput(e);
	});
	$('#deptIdAlias${subTableRelation.objectNameUpCase}').on('focus',function(e){
		new H5CommonSelect({type:'deptSelect', idFiled:'deptId${subTableRelation.objectNameUpCase}',textFiled:'deptIdAlias${subTableRelation.objectNameUpCase}'});
		this.blur();
		nullInput(e);
	});
	$('#partyActivist_import').bind('click',function(){
		var options = {
		templateCode : "partyActivistExcelImport",
		callBackFunc: function () {
		 $('#partyActivistJqGrid').trigger("reloadGrid");
		 }
		};
		$(this).sysExcelImport(options);
	});
$('#partyIdAlias').on('focus',function(e){
		
		
		var selectIndex = layer.open({
	        type: 2,
	        area: ['50%', '50%'],
	        title: '选择父节点',
	        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	        maxmin: false, //开启最大化最小化按钮
	        content:  'platform/avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationParentSelect',
	        btn: ['确定', '取消'],
	        yes: function(index, layero){
	        	//debugger;
	        	var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
	        	var parentIdContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentId");
	        	var parentNameContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentPartyName");
	        	var selectedNewNode = iframeWin.getSelectedNode();
	        	if (selectedNewNode.attributes.partyCode == '1') {
			
						layer.alert('所选择节点不能是根节点！', {
							icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
						});
			
					return;
				}
				/*var curNodeId = selectedNodes[0].id;
				if (curNodeId === '' || selectedNewNode.attributes.treePath === undefined || selectedNewNode.attributes.treePath === '') {
					layer.alert('所选择父节点不合法，请重新选择！', {
						icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
					});
					return;
				}
				if (selectedNewNode.attributes.treePath.indexOf(curNodeId) >= 0) {
					if (selectedNewNode.id == curNodeId) {
						layer.alert('所选择父节点不能是本节点！', {
							icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
						});
					} else {
						layer.alert('所选择父节点不能是本节点的子节点！', {
							icon: 7, area: ['400px', ''], closeBtn: 0, btn: ['关闭'], title: '提示'
						});
					}
					return;
				}*/
				$("#partyId").val(selectedNewNode.id);
				$("#partyIdAlias").val(selectedNewNode.text);
				layer.close(layer.index);
				layer.close(selectIndex);
	        },
			btn2: function(index, layero){
			    layer.close(index);
			}
	    });
	
		this.blur();
		nullInput(e);
	}); 
});
//南侧拖拽修改改变时修改表格自适应
function resizeSouth(width,height){
	var windowHeight = $(window).height();
	var topTableHeight = windowHeight - height
	$('#partyActivistJqGrid').setGridHeight(height-120);
	$('#activistAchievementJqGrid').setGridHeight(topTableHeight-150);
	$('#activistMeritsJqGrid').setGridHeight(topTableHeight-150);
};
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	if(e.target && e.target.id && e.target.id == 'activistMeritsA'){
		$('#activistMeritsJqGrid').setGridWidth($(window).width());
	}
	
  });
</script>
</html>

