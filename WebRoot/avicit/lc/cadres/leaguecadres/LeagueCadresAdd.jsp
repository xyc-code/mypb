<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "avicit/lc/cadres/leagueCadres/leagueCadresController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" />
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="userIdAlias">姓名:</label>
					</th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="userId" name="userId">
							<input class="form-control" placeholder="请选择用户" type="text" id="userIdAlias" name="userIdAlias">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
   					</td>
					<th width="15%">
						<label for="deptIdAlias">所在单位:</label>
					</th>
					<td width="34%">
						<div class="input-group input-group-sm">
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
						<label for="fullEducation">全日制教育学历:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="fullEducation"  id="fullEducation" />
   					</td>
					<th>
						<label for="fullUniversity">全日制教育学历:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="fullUniversity" id="fullUniversity" title="" isNull="true" lookupCode="LC_CARDES_FULL_EDUCATION" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="jobEducation">在职教育学历:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="jobEducation"  id="jobEducation" />
   					</td>
					<th>
						<label for="jobUniversity">在职教育毕业院校:</label>
					</th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="jobUniversity" id="jobUniversity" title="" isNull="true" lookupCode="LC_CARDES_JOB_UNIVERSITY" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="post">团现任职务:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="post"  id="post" />
   					</td>
					<th>
						<label for="postDate">任现职年月:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="postDate" id="postDate" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="phone">办公电话:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="phone"  id="phone" />
   					</td>
					<th>
						<label for="tel">移动电话:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="tel"  id="tel" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="mail">电子邮件:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="mail"  id="mail" />
   					</td>
					<th>
						<label for="marks">备注:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="marks"  id="marks" />
   					</td>
				</tr>
    		 <tr>
					<th>
						<label for="validFlag">是否有效:</label>
					</th>
					<td>
					<pt6:h5select css_class="form-control input-sm" name="validFlag"  id="validFlag" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" defaultValue="1"/>
			
   					</td>
				</tr>
			</table>
		</form>
	</div>
	<div data-options="region:'south',border:false" style="height: 50px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="leagueCadres_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="leagueCadres_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">
		//遮罩
		var maskId = null;
		//初始化时间控件
		function initDateSelect(){
			$('.date-picker').datepicker({
				beforeShow: function(selectedDate) {
					setTimeout(function () {
						$('#ui-datepicker-div').css("z-index", 99999999);
					}, 100);
				}
			});
			$('.time-picker').datetimepicker({
				oneLine:true,//单行显示时分秒
				closeText:'确定',//关闭按钮文案
				showButtonPanel:true,//是否展示功能按钮面板
				showSecond:false,//是否可以选择秒，默认否
				beforeShow: function(selectedDate) {
					if($('#'+selectedDate.id).val()==""){
							$(this).datetimepicker("setDate", new Date());
							$('#'+selectedDate.id).val('');
					}
					setTimeout(function () {
						$('#ui-datepicker-div').css("z-index", 99999999);
					}, 100);
				}
			});
			$('.date-picker').on('keydown',nullInput);
			$('.time-picker').on('keydown',nullInput);
		}
	
		function closeForm(){
			parent.leagueCadres.closeDialog("insert");
		}
		
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
	        //限制保存按钮多次点击
  		 	$('#leagueCadres_saveForm').addClass('disabled').unbind("click");	
			parent.leagueCadres.save($('#form'),"insert");
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.leagueCadres.formValidate($('#form'));
			//保存按钮绑定事件
			$('#leagueCadres_saveForm').bind('click', function(){
				saveForm();
			}); 
			
			//返回按钮绑定事件
			$('#leagueCadres_closeForm').bind('click', function(){
				closeForm();
			});
			
			$('#userIdAlias').on('focus',function(e){
				new H5CommonSelect({type:'userSelect', idFiled:'userId',textFiled:'userIdAlias',callBack:selectUserCallBack,selectModel:'single',deptidFiled:'deptId',deptNameFiled:'deptIdAlias'});
				this.blur();
				nullInput(e);
			});

			function selectUserCallBack(user){
				$("#userCode").val(user.loginNames);
				console.log($("#userCode").val(user.loginNames))
				$.ajax({
					url:"api/avicit/pb/member/partyMember/rest/"+user.loginNames,
					type:"GET",
					dataType:"JSON",
					async:false,
					success:function(e){
						if(e.result == "success"&&e.dto != null){
							//$("#workTime").val(format(e.dto.cjgzrq))
							//$("#birthPlace").val(e.dto.csd)
							$("#cardId").val(e.dto.sfzh)
							//$("#address").val(e.dto.JTZZ)
							if(e.dto.xb=="男"){
								e.dto.xb="1"
							}else if(e.dto.xb=="女"){
								e.dto.xb="2"
							}

							if(e.dto.whcd=="大专"){
								e.dto.whcd="0"
							} else if(e.dto.whcd=="大专"){
								e.dto.whcd="1"
							} else if(e.dto.whcd=="硕士研究生"){
								e.dto.whcd="2"
							} else if(e.dto.whcd=="博士研究生"){
								e.dto.whcd="7"
							}

							//$("#sex").val(e.dto.xb)
							$("#nation").val(e.dto.mz)
							//$("#birthday").val(format(e.dto.csrq))
							$("#post").val(e.dto.szgw)
							//$("#orign").val(e.dto.jg)
							$("#fullUniversity").val(e.dto.whcd)
							//$("#attribute02").val(e.dto.nl)

							//$("#onoffJob").val("0")
						}
					}

				})
			};
		
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
</body>
</html>

