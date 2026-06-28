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
<!-- ControllerPath = "platform/avicit/lc/member/leagueMember/leagueMemberController/toLeagueMemberManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueMember_button_add" permissionDes="添加">
	  		<a id="leagueMember_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueMember_button_edit" permissionDes="编辑">
			<a id="leagueMember_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueMember_button_delete" permissionDes="删除">
			<a id="leagueMember_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueMember_button_export" permissionDes="导出">
			<a id="leagueMember_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueMember_button_import" permissionDes="导入">
			<a id="leagueMember_import" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导入"><i class="icon iconfont icon-Import"></i> 导入</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="leagueMember_keyWord" id="leagueMember_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="leagueMember_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="leagueMember_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="leagueMemberjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="userIdAlias">姓名:</label>
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
					<label for="deptIdAlias">所在单位:</label>
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
					<label for="leagueId">所在团组织:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input type="hidden" name="leagueId"  id="leagueId" />
						<input class="form-control" placeholder="请选择团支部" type="text" id="leagueIdAlias" name="leagueIdAlias">
							<span class="input-group-addon">
								<i class=" glyphicon glyphicon-pencil"></i>
							</span>
							</div>
				</td>
				<th>
					<label for="sex">性别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="sex" id="sex" title="" isNull="true" lookupCode="PLATFORM_SEX" />
				</td>
			</tr>
			<tr>
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
			</tr>
			<tr>
				<th>
					<label for="post">职务:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="post"  id="post" />
				</td>
				<th>
					<label for="leaguePost">团组织职务:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="leaguePost"  id="leaguePost" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="inpartyDateBegin">入党时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="inpartyDateBegin" id="inpartyDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="inpartyDateEnd">入党时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="inpartyDateEnd" id="inpartyDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="leagueStatus">团员状态:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="leagueStatus" id="leagueStatus" title="" isNull="true" lookupCode="LC_LEAGUE_MEMBER_STATUS" />
				</td>
				<th>
					<label for="incompanylcDateBegin">转入公司团组织时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="incompanylcDateBegin" id="incompanylcDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="incompanylcDateEnd">转入公司团组织时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="incompanylcDateEnd" id="incompanylcDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="indeptlcDateBegin">转入当前单位团组织时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="indeptlcDateBegin" id="indeptlcDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="indeptlcDateEnd">转入当前单位团组织时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="indeptlcDateEnd" id="indeptlcDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="cardId">身份证号:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="cardId"  id="cardId" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="nation">民族:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="nation"  id="nation" />
				</td>
				<th>
					<label for="political">政治面貌:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="political"  id="political" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="inleagueDateBegin">入团时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="inleagueDateBegin" id="inleagueDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="inleagueDateEnd">入团时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="inleagueDateEnd" id="inleagueDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="education">文化程度:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="education" id="education" title="" isNull="true" lookupCode="LC_LEAGUE_MEMBER_EDUCATION" />
				</td>
				<th>
					<label for="phone">办公电话:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="phone"  id="phone" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="tel">移动电话:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="tel"  id="tel" />
				</td>
				<th>
					<label for="mail">电子邮件:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="mail"  id="mail" />
				</td>
			</tr>
			<tr>
			<th>
						<label for="validFlag">是否有效:</label>
					</th>
					<td>
					<pt6:h5select css_class="form-control input-sm" name="validFlag"  id="validFlag" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" />
			
   					</td>
   					</tr>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/lc/member/leaguemember/js/LeagueMember.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var leagueMember;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="leagueMember.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="leagueMember.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '姓名', name : 'userIdAlias',formatter:formatValue, width: 150, align: 'right'},
		{ label : '所在单位', name : 'deptIdAlias', width: 150, align: 'right'},
		{ label : '所在团组织', name : 'leagueIdAlias', width: 150, align: 'left'},
		{ label : '性别', name : 'sexName', width: 150, align: 'center'},
		{ label : '出生年月', name : 'birthday', formatter : format, width: 150, align: 'center'},
		{ label : '职务', name : 'post', width: 150, align: 'left'},
		{ label : '团组织职务', name : 'leaguePost', width: 150, align: 'left'},
		{ label : '入党时间', name : 'inpartyDate', formatter : format, width: 150, align: 'center'},
		{ label : '团员状态', name : 'leagueStatusName', width: 150, align: 'center'},
		{ label : '转入公司团组织时间', name : 'incompanylcDate', formatter : format, width: 150, align: 'center'},
		{ label : '转入当前单位团组织时间', name : 'indeptlcDate', formatter : format, width: 150, align: 'center'},
		{ label : '身份证号', name : 'cardId', width: 150, align: 'left'},
		{ label : '民族', name : 'nation', width: 150, align: 'left'},
		{ label : '政治面貌', name : 'political', width: 150, align: 'left'},
		{ label : '入团时间', name : 'inleagueDate', formatter : format, width: 150, align: 'center'},
		{ label : '文化程度', name : 'educationName', width: 150, align: 'center'},
		{ label : '办公电话', name : 'phone', width: 150, align: 'left'},
		{ label : '移动电话', name : 'tel', width: 150, align: 'left'},
		{ label : '电子邮件', name : 'mail', width: 150, align: 'left'},
		{ label : '备注', name : 'marks', width: 150, align: 'left', sortable:false},
            { label : '是否有效', name : 'validFlagName', width: 150, align: 'left'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#leagueMember_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	leagueMember= new LeagueMember('leagueMemberjqGrid','${url}','searchDialog','form','leagueMember_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#leagueMember_insert').bind('click', function(){
		leagueMember.insert();
	});
	//编辑按钮绑定事件
	$('#leagueMember_modify').bind('click', function(){
		leagueMember.modify();
	});
	//删除按钮绑定事件
	$('#leagueMember_del').bind('click', function(){  
		leagueMember.del();
	});
	//查询按钮绑定事件
	$('#leagueMember_searchPart').bind('click', function(){
		leagueMember.searchByKeyWord();
	});
	//打开高级查询框
	$('#leagueMember_searchAll').bind('click', function(){
		leagueMember.openSearchForm(this);
	});
	//导出Excel
	$('#leagueMember_export').bind('click',function(){
		var ids = $("#leagueMemberjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#leagueMemberjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("leagueMember",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

	$('#userIdAlias').on('focus',function(e){
		new H5CommonSelect({type:'userSelect', idFiled:'userId',textFiled:'userIdAlias'});
		this.blur();
		nullInput(e);
	});
	$('#deptIdAlias').on('focus',function(e){
		new H5CommonSelect({type:'deptSelect', idFiled:'deptId',textFiled:'deptIdAlias'});
		this.blur();
		nullInput(e);
	});
	$('#leagueMember_import').bind('click',function(){
		var options = {
		templateCode : "leagueMemberExcelImport",
		callBackFunc: function () {
		 $('#leagueMemberjqGrid').trigger("reloadGrid");
		 }
		};
		$(this).sysExcelImport(options);
	});
	$('#leagueIdAlias').on('focus',function(e){
		
		
		var selectIndex = layer.open({
	        type: 2,
	        area: ['50%', '50%'],
	        title: '选择父节点',
	        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
	        maxmin: false, //开启最大化最小化按钮
	        content:  'platform/avicit/lc/organize/leagueOrganization/leagueOrganizationController/toLeagueOrganizationParentSelect',
	        btn: ['确定', '取消'],
	        yes: function(index, layero){
	        	//debugger;
	        	var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
	        	var parentIdContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentId");
	        	var parentNameContent = iframeWin.parent.frames[0].frameElement.contentDocument.getElementById("parentPartyName");
	        	var selectedNewNode = iframeWin.getSelectedNode();
	        	if (selectedNewNode.attributes.leagueCode == '1') {
			
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
				$("#leagueId").val(selectedNewNode.id);
				$("#leagueIdAlias").val(selectedNewNode.text);
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
</script>
</html>

