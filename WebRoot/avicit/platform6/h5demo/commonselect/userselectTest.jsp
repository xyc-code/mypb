<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,table,form,tree";
%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<HEAD>
<!-- ControllerPath = "demo/demoreception/demoReceptionController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>

</HEAD>
<BODY>
	<div class="easyui-layout" fit="true">
		<div data-options="region:'center',title:''">
			<div class="row">
				<div class="col-xs-12">
					<center>选人框</center>
				</div>
			</div>
			<div class="row form_commonTable">
				<div class="col-xs-1"></div>
				<div class="col-xs-5">
					<p>
						<font size="2"> 调用方式 :</br> 选择控件点击事件绑定 new
							H5CommonSelect({...});</br> option参数说明：</br> {</br> selectModel: 'multi', //
							multi: 多选，当未设置或其他值单选 必输</br> type:'userSelect', // 选择类型：
							userSelect对应选人 必输</br> idFiled:'userids', // 存储用户ID的hidden域 必输</br>
							textFiled:'userAliass', // 存储用户名称的控件 必输</br> deptidFiled:'deptids' //
							存储选择用户的部门(多组织或兼职部门情况下使用) 可输</br> }</br>
						</font>
					</p>
				</div>
				<div class="col-xs-5">
					单选
					<div class="input-group  input-group-sm">
						<input type="hidden" id="userid" name="userid"> <input
							class="form-control" placeholder="请选择用户" type="text"
							id="userAlias" name="userAlias"><span
							class="input-group-addon" id="userbtn"> <i
							class="glyphicon glyphicon-user"></i>
						</span>
					</div>
					多选
					<div class="input-group  input-group-sm">
						<input type="hidden" id="userids" name="userids"> <input
							class="form-control" placeholder="请选择用户" type="text"
							id="userAliass" name="userAliass"><span
							class="input-group-addon"> <i
							class="glyphicon glyphicon-user"></i>
						</span>
					</div>

					多组织模式下用户选择，需要增加部门ID存储
					<div class="input-group  input-group-sm">
						<input type="hidden" id="userids2" name="userids2"> <input
							type="hidden" id="deptids2" name="deptids2"> <input
							class="form-control" placeholder="请选择用户" type="text"
							id="userAliass2" name="userAliass2"><span
							class="input-group-addon"> <i
							class="glyphicon glyphicon-user"></i>
						</span>
					</div>
				</div>
				<div class="col-xs-1"></div>
			</div>

			<div class="row">
				<div class="col-xs-12">
					<center>选部门</center>
				</div>
			</div>
			<div class="row form_commonTable">
				<div class="col-xs-1"></div>
				<div class="col-xs-5">
					<p>
						<font size="2"> 调用方式 :</br> 选择控件点击事件绑定 new
							H5CommonSelect({...});</br> option参数说明：</br> {</br> selectModel: 'multi', //
							multi: 多选，当未设置或其他值单选 必输</br> type:'deptSelect', // 选择类型： deptSelect 必输</br>
							idFiled:'deptids', // 存储部门ID的hidden域 必输</br> textFiled:'deptAliass',
							// 存储部门名称的控件 必输</br> }</br>
						</font>
					</p>
				</div>
				<div class="col-xs-5">
					单选
					<div class="input-group  input-group-sm">
						<input type="hidden" id="deptid" name="deptid"> <input
							class="form-control" placeholder="请选择部门" type="text"
							id="deptAlias" name="deptAlias"><span
							class="input-group-addon"> <i
							class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
					多选
					<div class="input-group  input-group-sm">
						<input type="hidden" id="deptids" name="deptids"> <input
							class="form-control" placeholder="请选择部门" type="text"
							id="deptAliass" name="deptAliass"><span
							class="input-group-addon"> <i
							class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
					<div class="col-xs-1"></div>
				</div>

			</div>
		
		<div class="row">
				<div class="col-xs-12">
					<center>选岗位</center>
				</div>
			</div>
			<div class="row form_commonTable">
				<div class="col-xs-1"></div>
				<div class="col-xs-5">
					<p>
						<font size="2"> 调用方式 :</br> 选择控件点击事件绑定 new
							H5CommonSelect({...});</br> option参数说明：</br> {</br> selectModel: 'multi', //
							multi: 多选，当未设置或其他值单选 必输</br> type:'positionSelect', // 选择类型： positionSelect 必输</br>
							idFiled:'positionids', // 存储部门ID的hidden域 必输</br> textFiled:'positionAliass',
							// 存储部门名称的控件 必输</br> }</br>
						</font>
					</p>
				</div>
				<div class="col-xs-5">
					单选
					<div class="input-group  input-group-sm">
						<input type="hidden" id="positionid" name="positionid"> <input
							class="form-control" placeholder="请选择岗位" type="text"
							id="positionAlias" name="positionAlias"><span
							class="input-group-addon"> <i
							class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
					 多选
					<div class="input-group  input-group-sm">
						<input type="hidden" id="positionids" name="positionids"> <input
							class="form-control" placeholder="请选择岗位" type="text"
							id="positionAliass" name="positionAliass"><span
							class="input-group-addon"> <i
							class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
					
				</div>

			</div>
			<div class="row">
				<div class="col-xs-12">
					<center>选角色</center>
				</div>
			</div>
			<div class="row form_commonTable">
				<div class="col-xs-1"></div>
				<div class="col-xs-5">
					<p>
						<font size="2"> 调用方式 :</br> 选择控件点击事件绑定 new
							H5CommonSelect({...});</br> option参数说明：</br> {</br> selectModel: 'multi', //
							multi: 多选，当未设置或其他值单选 必输</br> type:'roleSelect', // 选择类型： roleSelect 必输</br>
							idFiled:'roleids', // 存储部门ID的hidden域 必输</br> textFiled:'roleAliass',
							// 存储部门名称的控件 必输</br> }</br>
						</font>
					</p>
				</div>
				<div class="col-xs-5">
					单选
					<div class="input-group  input-group-sm">
						<input type="hidden" id="roleid" name="roleid"> <input
							class="form-control" placeholder="请选择角色" type="text"
							id="roleAlias" name="roleAlias"><span
							class="input-group-addon"> <i
							class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
					 多选
					<div class="input-group  input-group-sm">
						<input type="hidden" id="roleids" name="roleids"> <input
							class="form-control" placeholder="请选择角色" type="text"
							id="roleAliass" name="roleAliass"><span
							class="input-group-addon"> <i
							class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
					
				</div>

			</div>
			<div class="row">
				<div class="col-xs-12">
					<center>选群组</center>
				</div>
			</div>
			<div class="row form_commonTable">
				<div class="col-xs-1"></div>
				<div class="col-xs-5">
					<p>
						<font size="2"> 调用方式 :</br> 选择控件点击事件绑定 new
							H5CommonSelect({...});</br> option参数说明：</br> {</br> selectModel: 'multi', //
							multi: 多选，当未设置或其他值单选 必输</br> type:'groupSelect', // 选择类型： groupSelect 必输</br>
							idFiled:'groupids', // 存储部门ID的hidden域 必输</br> textFiled:'groupAliass',
							// 存储部门名称的控件 必输</br> }</br>
						</font>
					</p>
				</div>
				<div class="col-xs-5">
					单选
					<div class="input-group  input-group-sm">
						<input type="hidden" id="groupid" name="groupid"> <input
							class="form-control" placeholder="请选择群组" type="text"
							id="groupAlias" name="groupAlias"><span
							class="input-group-addon"> <i
							class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
					 多选
					<div class="input-group  input-group-sm">
						<input type="hidden" id="groupids" name="groupids"> <input
							class="form-control" placeholder="请选择群组" type="text"
							id="groupAliass" name="groupAliass"><span
							class="input-group-addon"> <i
							class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div> 
					
				</div>

			</div>
		</div>
		</div>
		<jsp:include
			page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
			<jsp:param value="<%=importlibs%>" name="importlibs" />
		</jsp:include>
		<script type="text/javascript">
			// 人员选择绑定事件
			// 单选
			var u1 = {
				type : 'userSelect',
				idFiled : 'userid',
				textFiled : 'userAlias'
			};
			$("#userAlias").on('focus', function(e) {
				new H5CommonSelect(u1);
				this.blur();
			});

			// 多选
			var u2 = {
				selectModel : 'multi',
				type : 'userSelect',
				idFiled : 'userids',
				textFiled : 'userAliass'
			};
			$("#userAliass").on('focus', function(e) {
				new H5CommonSelect(u2);
				this.blur();
			});

			// 带部门
			var u3 = {
					defaultLoadDeptId:"8a58ab4d4c2141fd014c217cdc5102b6",
				selectModel : 'multi',
				type : 'userSelect',
				idFiled : 'userids2',
				textFiled : 'userAliass2',
				deptidFiled : 'deptids2'
			};
			$("#userAliass2").on('focus', function(e) {
				new H5CommonSelect(u3);
				this.blur();
			});
			
		</script>

		<script type="text/javascript">
			//部门选择绑定事件
			//单选
			var d1 = {
				type : 'deptSelect',
				idFiled : 'deptid',
				textFiled : 'deptAlias'
			};

			$("#deptAlias").on('focus', function(e) {
				new H5CommonSelect(d1);
				this.blur();
			});
			//多选
			var d2 = {
				
				selectModel : 'multi',
				type : 'deptSelect',
				idFiled : 'deptids',
				textFiled : 'deptAliass'
			};

			$("#deptAliass").on('focus', function(e) {
				new H5CommonSelect(d2);
				this.blur();
			});
		</script>
		<script>
		//岗位选择绑定事件
		var p1 ={
				type : 'positionSelect',
				idFiled : 'positionid',
				textFiled : 'positionAlias'
		};
		$("#positionAlias").on('focus', function(e) {
			new H5CommonSelect(p1);
			this.blur();
		});
		//多选
		var p2 = {
			selectModel : 'multi',
			type : 'positionSelect',
			idFiled : 'positionids',
			textFiled : 'positionAliass'
		};

		$("#positionAliass").on('focus', function(e) {
			new H5CommonSelect(p2);
			this.blur();
		});
		</script>
		<script>
		//角色选择绑定事件
		var r1 ={
				type : 'roleSelect',
				idFiled : 'roleid',
				textFiled : 'roleAlias'
		};
		$("#roleAlias").on('focus', function(e) {
			new H5CommonSelect(r1);
			this.blur();
		});
		//多选
		var r2 = {
			selectModel : 'multi',
			type : 'roleSelect',
			idFiled : 'roleids',
			textFiled : 'roleAliass'
		};

		$("#roleAliass").on('focus', function(e) {
			new H5CommonSelect(r2);
			this.blur();
		});
		</script>
		<script>
		//群组选择绑定事件
		var g1 ={
				type : 'groupSelect',
				idFiled : 'groupid',
				textFiled : 'groupAlias'
		};
		$("#groupAlias").on('focus', function(e) {
			new H5CommonSelect(g1);
			this.blur();
		});
		//多选
		var g2 = {
			selectModel : 'multi',
			type : 'groupSelect',
			idFiled : 'groupids',
			textFiled : 'groupAliass'
		};

		$("#groupAliass").on('focus', function(e) {
			new H5CommonSelect(g2);
			this.blur();
		});
		</script>
</BODY>
</HTML>