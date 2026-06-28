<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>平台示例组件代码示例</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <!-- 引入prism.css文件 -->
    <link rel="stylesheet" type="text/css" href="avicit/platform6/console/demostorage/css/prism.css"/>
</head>
<body>
<%--通用选择组件--%>
<div class="codeGenerator" >
<div id="exampleCodeFont">
    <pre>
       <code class="language-html">
       **********************************用户选择框表单页面标准写法*******************************
    	&lt;th width="15%">&lt;label for="userIdAlias">用户:&lt;/label>&lt;/th>
		&lt;td width="34%">
		   &lt;div class="input-group  input-group-sm">
			  &lt;input type="hidden"  id="userId" name="userId">
			  &lt;input class="form-control" placeholder="请选择用户" type="text" id="userIdAlias" name="userIdAlias">
		      &lt;span class="input-group-addon"> &lt;i class="glyphicon glyphicon-user">&lt;/i>&lt;/span>
		   &lt;/div>
 	    &lt;/td>	
       </code>
       <code class="language-javascript line-numbers">
       **********************************用户选择初始化及参数说明*******************************			
		//用户选择框初始化参数设置，其中“必填参数”在初始化时必须填写，其他参数按需配置
		var userInfoAll = {
			type:'userSelect', //必填参数，声明控件类型
			idFiled:'userId',  //必填参数，绑定用户选择框的id字段
			textFiled:'userIdAlias', //必填参数，绑定用户选择框的显示名称字段
			defaultOrgId:" ",//选填，加载指定组织用户信息,配置组织id，多个组织用“;”或“,”分割
			defaultLoadDeptId:" ",//选填，加载指定部门用户信息,配置部门id，多个部门用“;”或“,”分割
			defaultLoadGroupId:" ",//选填，加载指定群组用户信息,配置群组id，多个群组用“;”或“,”分割
			defaultLoadRoleId:" ",//选填，加载指定角色用户信息,配置角色id，多个角色用“;”或“,”分割
			defaultLoadPositionId:" ",//选填，加载指定岗位用户信息,配置岗位id，多个岗位用“;”或“,”分割
			secretLevel:'1',//选填，设置密级等级，根据密级等级过滤用户
			selectModel:'multi',  //选填，是否可以多选，默认是单选，不用配置参数，如果要多选，则将参数值设置“multi”
			deptidFiled:'deptInfo',  //选填，选择用户时回填部门id信息
			deptNameFiled:'deptInfoAlias'//选填，选择用户时回填部门名称信息
		};
		//用户选择框初始化，初始化时，需要传递相关参数，参数为“userInfoAll”，在上方展示
		$('#userIdAlias').on('focus',function(e){
			new H5CommonSelect(userInfoAll);
			this.blur();
			nullInput(e);
		});
	   </code>
       <code class="language-html">
       **********************************部门选择框表单页面标准写法*******************************
         &lt;th width="15%">&lt;label for="userDeptAlias">部门:&lt;/label>&lt;/th>
		 &lt;td width="34%">
			 &lt;div class="input-group  input-group-sm">
				&lt;input type="hidden"  id="deptId" name="deptId">
				&lt;input class="form-control" placeholder="请选择部门" type="text" id="deptIdAlias" name="deptIdAlias" >
				&lt;span class="input-group-addon">&lt;i class="glyphicon glyphicon-equalizer">&lt;/i>&lt;/span>
			 &lt;/div>
 		 &lt;/td>				
        </code>
         <code class="language-javascript line-numbers">           
        **********************************部门选择初始化及参数说明*******************************	
        //部门选择框初始化参数设置，其中“必填参数”在初始化时必须填写，其他参数按需配置
		var deptInfoAll = {
			type:'deptSelect', //必填参数，声明控件类型
			idFiled:'deptInfo',  //必填参数，绑定部门选择框的id字段
			textFiled:'deptInfoAlias', //必填参数，绑定部门选择框的显示名称字段
			defaultLoadDeptId:" ",//选填，加载指定部门信息,配置部门id，多个部门用“;”或“,”分割
			deptLevel:"2",//选填，部门展开的层级，如果设置为2，则只展开两级。
			defaultOrgId:" ",//选填，加载指定组织下部门信息,配置组织id，多个组织用“;”或“,”分割
			selectModel:'multi' //选填，是否可以多选，默认是单选，不用配置参数，如果要多选，则将参数值设置“multi”
		};
        //部门选择框初始化
		$('#deptIdAlias').on('focus',function(e){
			new H5CommonSelect(deptInfoAll);
			this.blur();
			nullInput(e);
		});       
	  </code>
	  <code  class="language-html">
       **********************************角色选择框表单页面标准写法*******************************
	    &lt;th>&lt;label for="userRoleAlias">角色:&lt;/label>&lt;/th>
	    &lt;td>
	     &lt;div class="input-group  input-group-sm">
	 	  &lt;input type="hidden"  id="roleId" name="roleId">
		  &lt;input class="form-control" placeholder="请选择角色" type="text" id="roleIdAlias" name="roleIdAlias" >
		  &lt;span class="input-group-addon"> &lt;i class="glyphicon glyphicon-equalizer">&lt;/i>&lt;/span>
	     &lt;/div>
	    &lt;/td>				
       </code>
       <code class="language-javascript line-numbers">           
       **********************************角色选择初始化及参数说明*******************************			
		//角色选择框初始化参数设置，其中“必填参数”在初始化时必须填写，其他参数按需配置
		var roleInfoAll = {
			type:'roleSelect', //必填参数，声明控件类型
			idFiled:'roleInfo', //必填参数，绑定角色选择框的id字段
			textFiled:'roleInfoAlias',//必填参数，绑定角色选择框的显示名称字段
			defaultLoadRoleId:" "//选填，加载指定角色信息,配置角色id，多个角色用“;”或“,”分割
		};
		//角色选择框初始化
		$('#roleIdAlias').on('focus',function(e){
			new H5CommonSelect(roleInfoAll);
			this.blur();
			nullInput(e);
		});
	   </code>
	   <code  class="language-html">
       **********************************岗位选择框表单页面标准写法*******************************
       &lt;th>&lt;label for="userRoleAlias">岗位:&lt;/label>&lt;/th>
       &lt;td>
	    &lt;div class="input-group  input-group-sm">
	    	&lt;input type="hidden"  id="positionId" name="positionId">
		    &lt;input class="form-control" placeholder="请选择岗位" type="text" 
		            id="positionIdAlias" name="positionIdAlias" >
		    &lt;span class="input-group-addon">&lt;i class="glyphicon glyphicon-equalizer">&lt;/i>&lt;/span>
	    &lt;/div>
      &lt;/td>				
      </code>
      <code class="language-javascript line-numbers"> 
	  **********************************岗位选择初始化及参数说明*******************************	
		//岗位选择框初始化参数设置，其中“必填参数”在初始化时必须填写，其他参数按需配置
		var positionInfoAll = {
			type:'positionSelect',//必填参数，声明控件类型
			idFiled:'positionInfo',//必填参数，绑定岗位选择框的id字段
			textFiled:'positionInfoAlias',//必填参数，绑定岗位选择框的显示名称字段
			defaultLoadPositionId:" "//选填，加载指定岗位信息,配置岗位id，多个岗位用“;”或“,”分割
		};
		//岗位选择框初始化
		$('#positionIdAlias').on('focus',function(e){
			new H5CommonSelect(positionInfoAll);
			this.blur();
			nullInput(e);
		});		
	   </code>
	   <code  class="language-html">
       **********************************组织选择框表单页面标准写法*******************************
         &lt;th>&lt;label for="userGroupAlias">组织:&lt;/label>&lt;/th>
		 &lt;td>
			&lt;div class="input-group  input-group-sm">
				&lt;input type="hidden"  id="orgId" name="orgId">
				&lt;input class="form-control" placeholder="请选择组织" type="text" 
				        id="orgIdAlias" name="orgIdAlias" >
				&lt;span class="input-group-addon">&lt;i class="glyphicon glyphicon-equalizer">&lt;/i>&lt;/span>
			&lt;/div>
  		&lt;/td>				
        </code>
        <code class="language-javascript line-numbers"> 
		**********************************组织选择初始化及参数说明*******************************	
		//组织选择框初始化参数设置，其中“必填参数”在初始化时必须填写，其他参数按需配置
		var orgInfoAll = {
			type:'orgSelect', //必填参数，声明控件类型
			idFiled:'orgInfo',//必填参数，绑定组织选择框的id字段
			textFiled:'orgInfoAlias',//必填参数，绑定组织选择框的显示名称字段
			defaultLoadOrgId:" "//选填，加载指定组织信息,配置组织id，多个组织用“;”或“,”分割
		};
		//组织选择框初始化
		$('#orgIdAlias').on('focus',function(e){
			new H5CommonSelect(orgInfoAll);
			this.blur();
			nullInput(e);
		});		
	  </code>  
	  <code  class="language-html">
       **********************************群组选择框表单页面标准写法*******************************
        &lt;th>&lt;label for="userGroupAlias">群组:&lt;/label>&lt;/th>
		&lt;td>
			&lt;div class="input-group  input-group-sm">
				&lt;input type="hidden"  id="groupId" name="groupId">
				&lt;input class="form-control" placeholder="请选择群组" type="text" 
				        id="groupIdAlias" name="groupIdAlias" >
				&lt;span class="input-group-addon">&lt;i class="glyphicon glyphicon-equalizer">&lt;/i>&lt;/span>
			&lt;/div>
  		&lt;/td>				
         </code> 
         <code class="language-javascript line-numbers"> 			   
        **********************************群组选择初始化及参数说明*******************************	
		//群组选择框初始化参数设置，其中“必填参数”在初始化时必须填写，其他参数按需配置
		var groupInfoAll = {
			type:'groupSelect', //必填参数，声明控件类型
			idFiled:'groupInfo', //必填参数，绑定群组选择框的id字段
			textFiled:'groupInfoAlias',//必填参数，绑定群组选择框的显示名称字段
			defaultLoadGroupId:" "//选填，加载指定群组信息,配置群组id，多个群组用“;”或“,”分割
		};
		//群组选择框初始化
		$('#groupIdAlias').on('focus',function(e){
			new H5CommonSelect(groupInfoAll);
			this.blur();
			nullInput(e);
		});		
		</code> 
       </pre>
</div>
</div>
<%--公共弹出框--%>
<div class="codeGenerator" >
	<div id="exampleCodeFont2">
	<pre><code class="language-javascript line-numbers">
	*******************************************公共弹框组件示例代码及初始化****************************

	 &lt;input id = "customDialog" type="text"&gt;

	 $('#customDialog').on('click', function () {
			new showCustomDialog('通用代码', 'avicit/platform6/console/demostorage/LookupTypeSelectForDemo.jsp', '90%', '80%', {'customDialog':'lookupTypeName'}, '',
					'', null, '', '');
		});
	*******************************************公共弹框组件参数说明**********************************
	说明：showCustomDialog是封装的一个公共弹窗组件，在使用该组件时，需要传递部分参数，参数说明如下：	
	new showCustomDialog(title, content, width, height, jsonField,splitChar,fun,maxmin,closeBtn, parentObj);
       title:标题
       content:弹出页地址
       width:设置宽度，写法xx%/xxpx
	   height:设置高度，写法xx%/xxpx
	   jsonField:父页面传递的json字段对象
	   splitChar:多选分隔符，默认";"
	   fun:父页面传递的函数引用
	   maxmin:是否最大化 false/true 默认false
	   closeBtn:是否显示关闭按钮false/true 默认true
	   parentObj:父对象（实现在父页面打开窗口回填值）
	   
	*******************************************动态维护*******************************************

	&lt;pt6:h5select css_class="form-control input-sm" name="deptType" id="deptType" title="部门类型"
	   isNull="true" lookupCode="PLATFORM_DEMOSTORAGE_CODE"  defaultValue='1'/&gt;&lt;a id="insertType">新增分类&lt;/a&gt;

	$('#insertType').on('click', function () {
		new showCustomDialog('新增分类', 'avicit/platform6/console/demostorage/SysLookupTypeManage.jsp',
			'80%','50%','','','','','','');
		});
	</code></pre>
	</div>
</div>
<%--选择框--%>
<div class="codeGenerator" >
  <div id="exampleCodeFont3">
	<pre><code class="language-html line-numbers">
   *******************************************单选*******************************************
  &lt;pt6:h5radio css_class="radio-inline"  name="sex" title="性别" canUse="0" 
                 lookupCode="PLATFORM_DEMOSTORAGE_CODE" defaultValue='1'/&gt;

  *******************************************多选*******************************************
  &lt;pt6:h5checkbox css_class="radio-inline"  name="sex" title="性别" canUse="0" 
                 lookupCode="PLATFORM_DEMOSTORAGE_CODE" defaultValue='1'/&gt;

  *******************************************下拉*******************************************
  &lt;pt6:h5select css_class="form-control input-sm" name="deptType" id="deptType" title="部门类型"
				  isNull="true" lookupCode="PLATFORM_DEMOSTORAGE_CODE"  defaultValue='1'/&gt;
 </code>
 <code class="language-html line-numbers">
  *******************************************自定义下拉*******************************************
  &lt;div id="test" class="input-group input-group-sm avicselect">
      &lt;input type="hidden" name="key" id="key">&lt;input type="text" class="form-control"id="ipt">
         &lt;span class="input-group-addon avicselect-act">
         &lt;i class="glyphicon glyphicon-calendar">&lt;/i>&lt;/span>
         &lt;div class="avicselect-list"&gt;&lt;/div&gt;
  &lt;/div&gt;
   //下拉信息初始化
  $("#columnSymbol").select2({});
  *******************************************可编辑下拉*******************************************
  &lt;select class="form-control input-sm js-example-data-array" id="columnSymbol" 
               name="columnSymbol" style="width: 100%;"&gt;
          &lt;option value="1">demo1&lt;/option&gt;
		  &lt;option value="2">demo2&lt;/option&gt;
		  &lt;option value="3">demo3&lt;/option&gt;
		  &lt;option value="4">demo4&lt;/option&gt;
  &lt;/select&gt;

   *******************************************树形下拉*******************************************
  &lt;div id="ext" class="input-group" style="width: 100%;"&gt;
	  &lt;input type="text" class="form-control input-sm" readonly="readonly" 
	                id="ext_datasourceUrl" name="ext_datasourceUrl"/&gt;
	  &lt;i id="inputClear" class="icon iconfont icon-guanbi1"&gt;&lt;/i&gt;
	  &lt;div class="input-group-addon" id="ext_datasourceButton"&gt;
		&lt;i class="glyphicon glyphicon-triangle-bottom"&gt;&lt;/i&gt;
	&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="dataSelectDiv"&gt;
	  &lt;ul id="consoleData" class="ztree"&gt;&lt;/ul&gt;
  &lt;/div&gt;
  </code>
  <code class="language-javascript line-numbers">
  //树形下拉-数据源初始化
  var extDataTree = new ExtDataTree('consoleData','avicit/platform6/console/demostorage/json/treeSelect.json','','txt');
      extDataTree.setOnSelect(function (treeNode) {
           if (treeNode.nodeType == "" || treeNode.nodeType == undefined) {
               return false;
           }
           $("#ext_datasourceUrl").val(treeNode.urlValue);
           $(".dataSelectDiv").hide();
           $("#inputClear").show();
       }).init();
       $("#ext_datasourceUrl").click(function () {
           $(".dataSelectDiv").toggle();
       });
       $("#ext_datasourceButton").click(function () {
           $(".dataSelectDiv").toggle();
       });
   //input清空按钮绑定事件
   $('#inputClear').bind('click', function () {
         clearInput();
    });
  function clearInput(){
       $('#ext_datasource').val('');
       $('#ext_datasourceName').val('');
       $('#ext_nodeType').val('');
       $('#ext_datasourceUrl').val('');
       $("#inputClear").hide();
   }
   </code></pre>
	</div>
</div>
<%--日期框--%>
<div class="codeGenerator" >
  <div id="exampleCodeFont4">
    <pre><code class="language-html line-numbers">
    *******************************************年份*******************************************
	&lt;input type="text" id="year" onclick="WdatePicker({skin:'whyGreen',dateFmt:'yyyy年'})"class="Wdate"/&gt;
    
    *******************************************月份*******************************************
    &lt;input type="text" id="month" onclick="WdatePicker({skin:'whyGreen',dateFmt:'yyyy年MM月'})" class="Wdate"/&gt;

    *******************************************起止日期*******************************************
	&lt;input id="startDate" class="Wdate" type="text" onclick="WdatePicker({maxDate:'#F{$dp.$D(\'endDate\')}'})"/&gt;
    &lt;input id="endDate" class="Wdate" type="text" onclick="WdatePicker({minDate:'#F{$dp.$D(\'startDate\')}'})"/&gt;
 
    *******************************************日期时间*******************************************
	&lt;input id="second" type="text" class="Wdate" onClick="WdatePicker({dateFmt:'yyyy年MM月dd日 HH时mm分ss秒'})"/&gt;
	</code></pre>
  </div>
</div>
<%--数字框--%>
<div class="codeGenerator" >
<div id="exampleCodeFont5">
<pre><code class="language-html line-numbers">
  *******************************************货币*******************************************
  &lt;div class="input-group input-group-sm spinner" data-trigger="spinner"&gt;
	 &lt;span class="input-group-addon"&gt; ￥ &lt;/span&gt;
	 &lt;input type="text" class="form-control input-sm" style=";" id="moneyDemo" name="moneyDemo"
	  data-min="0" data-max="99999999.99" data-precision="2" title="货币" maxlength="10"&gt;
  &lt;/div&gt;

   *******************************************百分比*******************************************
  &lt;div class="input-group input-group-sm spinner" data-trigger="spinner"&gt;
	  &lt;input class="form-control" type="text" name="percentDemo" id="percentDemo" data-min="0" 
	  data-max="100.00" data-precision="2" data-rule="percent" style="text-align:right; "&gt;
          &lt;span class="input-group-addon"&gt;%&lt;/span&gt;
  &lt;/div&gt;

   *******************************************千分位*******************************************
  &lt;div class="input-group input-group-sm spinner" data-trigger="spinner"&gt;
	&lt;span class="input-group-addon"&gt;&lt;i class="fa fa-fw fa-rmb"&gt;&lt;/i&gt;&lt;/span&gt;
	  &lt;input type="text" id="thousandMoneyDemo" name="thousandMoneyDemo" value="" maxlength="200"
		   class="form-control inputmask" data-inputmask-alias="money" 
		   data-inputmask="'digits':'2'" style="text-align: right;"/&gt;
     &lt;span class="input-group-addon"&gt;(千分位，右对齐，保留2位小数)&lt;/span&gt;
  &lt;/div&gt;

 *******************************************数字微调*******************************************
  &lt;div class="input-group input-group-sm spinner" data-trigger="spinner"&gt;
	&lt;input class="form-control" type="text" name="order" id="order"
		data-min="-9.9999999999E10" data-max="9.9999999999E10" data-step="1" data-precision="0"&gt; 
	&lt;span class="input-group-addon"&gt;
		&lt;a href="javascript:;" class="spin-up" data-spin="up"&gt;&lt;i
				class="glyphicon glyphicon-triangle-top"&gt;&lt;/i&gt;&lt;/a&gt; &lt;a
		      href="javascript:;" class="spin-down" data-spin="down"&gt;&lt;i
		      class="glyphicon glyphicon-triangle-bottom"&gt;&lt;/i&gt;&lt;/a&gt;
	&lt;/span&gt;
  &lt;/div&gt;
	</code>
</pre>
</div>
</div>
<%--文本框--%>
<div class="codeGenerator" >
	<div id="exampleCodeFont6">
		<pre><code class="language-javascript line-numbers">
    *******************************************提示*******************************************
	&lt;th width="10%" style="word-break: break-all; word-warp: break-word;"&gt;&lt;label&gt;提示:&lt;/label&gt;
	   &lt;i class="tips-iconhelp icon iconfont icon-question-circle" id="showUnValidUserTips"&gt;&lt;/i&gt;
	&lt;/th&gt;
	&lt;td width="39%" &gt;
		&lt;div class="input-group input-group-sm "&gt;
			&lt;input type="text"&gt;
		&lt;/div&gt;
	&lt;/td&gt;

    *******************************************必填*******************************************
    &lt;th width="10%" style="word-break: break-all; word-warp: break-word;"&gt;
       &lt;i class="required"&gt;*&lt;/i&gt;&lt;label&gt;必填:&lt;/label&gt;&lt;/th&gt;
	&lt;td width="39%" &gt;
		&lt;div class="input-group input-group-sm "&gt;
			&lt;input type="text"&gt;
		&lt;/div&gt;
	&lt;/td&gt;

    *******************************************邮件*******************************************
	&lt;div class="input-group"&gt;
		&lt;span class="input-group-addon"&gt;&lt;i class="fa fa-fw fa-envelope"&gt;&lt;/i&gt;&lt;/span&gt;
		&lt;input type="text" id="testInput_regex" name="testInput_regex" value="" maxlength="200" 
		  class="form-control inputmask" data-inputmask-regex="[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}"/&gt;
        &lt;span class="input-group-addon"&gt;(正则表达式)&lt;/span&gt;
	&lt;/div&gt;

    *******************************************电话*******************************************
	&lt;th style="word-break: break-all; word-warp: break-word;">&lt;label>电话:&lt;/label>&lt;/th>
         &lt;td>
               &lt;div class="input-group input-group-sm">
                  &lt;span class="input-group-addon">+86&lt;/span>
                  &lt;input class="form-control" type="text">
              &lt;/div>
        &lt;/td>

    *******************************************密码*******************************************
    &lt;th style="word-break: break-all; word-warp: break-word;">&lt;label>密码:&lt;/label>&lt;/th>
          &lt;td>
             &lt;div class="input-group input-group-sm">
                    &lt;span class="input-group-addon">&lt;i class="fa fa-fw fa-key">&lt;/i>&lt;/span>
                    &lt;input class="form-control" type="password">
                &lt;/div>
          &lt;/td>
    *******************************************快速删除*******************************************
	&lt;select class="js-example-basic-multiple" id="method" name="method" multiple="multiple" style="width: 100%"&gt;
		&lt;option value="1"&gt;demo1&lt;/option&gt;
		&lt;option value="2"&gt;demo2&lt;/option&gt;
		&lt;option value="3"&gt;demo3&lt;/option&gt;
		&lt;option value="4"&gt;demo4&lt;/option&gt;
	&lt;/select&gt;
	
	//快速删除初始化
	$("#method").select2({});
			</code>
		</pre>
	</div>
</div>
<%--特殊样式框--%>
<div class="codeGenerator" >
   <div id="exampleCodeFont7">
   <pre>
	   <code class="language-html line-numbers">
   *******************************************开关*******************************************
	//引入开关组件的样式文件、js文件
	&lt;link rel="stylesheet" type="text/css" href="static/h5/switch/css/bootstrap-switch.css" />	
    &lt;script type="text/javascript" src="static/h5/switch/js/bootstrap-switch.js">&lt;/script>	
    //表单页面示例写法
    &lt;input type="checkbox" id="showUnValidUser"&gt;
    </code>
	<code class="language-javascript line-numbers">	
	//开关组件初始化
	$('#showUnValidUser').bootstrapSwitch({
	         size:'small', 
	         onText:'开启', //设置on文本
	         offText:'关闭', //设置off文本
	         onColor : "success", //设置on文本颜色  info/success/warning/danger/primary/default
	         offColor : "danger" //设置off文本颜色  info/success/warning/danger/primary/default
	     });
  </code>
	   <code class="language-html line-numbers">
   *******************************************滑动输入*******************************************
   //引入滑动输入组件的样式文件、js文件
   &lt;link rel="stylesheet" type="text/css" href="static/h5/jquery-range/css/jquery.range.css" />	
   &lt;script type="text/javascript" src="static/h5/jquery-range/js/jquery.range.js">&lt;/script>
   //表单页面示例写法	
   &lt;input type="hidden" class="form-control input-sm single-slider" name="oneFontSize" id="oneFontSize">
  </code><code class="language-javascript line-numbers">
   //滑动输入初始化
   $('#oneFontSize').jRange({
        from: 0,
        to: 100,
        step: 1,
        format: '%s%',
        scale: ['0', '100%'],
        width: $("#oneFontSize").parent().width(),
        height: 50,
        showLabels: true,
        showScale: true,
        isRange : false
    });
    </code>
   <code class="language-html line-numbers">
    ********************************************折叠面板*******************************************
	&lt;div class="input-group input-group-sm "&gt;
		&lt;div id="accordion"&gt;
			&lt;h3&gt;面板一&lt;/h3&gt;
			&lt;div&gt;
				&lt;p&gt;
					这是折叠面板示例一。
				&lt;/p&gt;
			&lt;/div&gt;
			&lt;h3&gt;面板二&lt;/h3&gt;
			&lt;div&gt;
				&lt;p&gt;
					这是折叠面板示例二。
				&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	</code>
   <code class="language-javascript line-numbers">
	//折叠面板初始化
	$( "#accordion" ).accordion();
			</code>
		</pre>
	</div>
</div>
<%--提示工具--%>
<div class="codeGenerator" >
	<div id="exampleCodeFont8">
		<pre>
			<code class="language-javascript line-numbers">
            *******************************************鼠标悬浮提示*******************************************
			function initTips() {
				var tipsIndex;
				$("#mouseTips").mouseover(function () {
					var message = "这是一个鼠标悬浮提示";
					tipsIndex = layer.tips(message, $(this), {
					tips: 2,
					area: ['auto', 'auto'],
					time: 0
				});
				}).mouseout(function () {
					layer.close(tipsIndex);
				});
			}

            *******************************************Loading提示*******************************************
            function doShowLoading(){
				var loading = top.layer.msg('努力加载中...', {
					icon: 16,
					shade: [0.3, '#000000'],
					scrollbar: false,
					time:1000}) ;//弹出遮罩,1s后关闭
			}
			</code>
		</pre>
	</div>
</div>
<%--富文本--%>
<div class="codeGenerator" >
	<div id="exampleCodeFont9">
		<pre>
			<code class="language-html line-numbers">
            *******************************************富文本*******************************************
			&lt;script id="summary" name="summary" type="text/plain">&lt;/script>
			</code>
			<code class="language-javascript line-numbers">
			 var option = {
				//initialContent : '',//初始化编辑器的内容
				initialFrameHeight: 300,//设置初始化高度
				initialFrameWidth: 880, //设置初始化宽度
				autoHeightEnabled: false, //定义是否高度自适应
				maximumWords: 4000, //输入的字符最大长度
				wordCount: true   // 开启右下角字符限制提示信息
			 };
			var editor = new UE.ui.Editor(option);//初始化编辑器
			editor.render("summary");//渲染编辑器
			</code>
		</pre>
	</div>
</div>
<%--附件上传--%>
<div class="codeGenerator" >
	<div id="exampleCodeFont10">
		<pre>
			<code class="language-html line-numbers">
            *******************************************附件上传(列表式)*******************************************
			 &lt;div id="attachmentTable">&lt;/div>
			</code>
			<code class="language-javascript line-numbers">
			 $('#attachmentTable').uploaderExt({
					secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
					allowPreview: true,
					showType: 'table'
				});
			</code>
			<code class="language-html line-numbers">
            *******************************************附件上传(列表式)*******************************************
			 &lt;div id="attachmentSpan">&lt;/div>
			</code>
			<code class="language-javascript line-numbers">
			 $('#attachmentSpan').uploaderExt({
					secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
					allowPreview: true,
					showType: 'span'
				});

			*******************************************附件上传参数列表*******************************************
				eformUI : 'bootstrap',
				formId : '',//业务数据ID(根据此ID查询旗下附件)
				elementId : '',//控件区域ID
				attIds : '',//所有附件ID，根据这些ID加载附件
				deleteAttachUrl : 'platform/webuploader/delete.json',//附件删除的url
				tableName : '',//业务表名称
				saveType : 'DataBase',//上传类型,包括DataBase、Disk、Fastfds和第三方
				auto : false, //不需要手动调用上传，有文件选择即开始上传
				expand : true, //初始是否展开
				multiple : true, //是否可以一次选择多个文件
				allowUpload : false, //是否显示上传按钮
				allowDownload : true, //是否允许下载附件
				allowAdd : true, //是否允许添加附件
				allowDelete : true, //是否允许删除附件
				allowEncry : false, //是否允许附件加密存储
				allowPreview : true,//是否允许预览附件
				allowSaveOnlineDisk : false,//是否允许存网盘
				allowSameName : false,//是否允许上传文件名称重复
				collapsible : true,//是否显示折叠按钮(包括附件个数信息,为false时忽略expand属性，折叠附件初始展开)
				fileNumLimit : 10,//允许上传的个数
				fileSizeLimit : undefined,//单个附件大小限制，可以带单位，合法的单位有:B、KB、MB、GB，如果省略单位，则默认为KB。该属性为0时，表示不限制文件的大小。
				secretLevel : '', //附件密级对应的通用代码
				fileCategory : '', //附件类型对应的通用代码
				formSecret : '',//表单密级字段id
				showType:'span',//展示方式分为两种，"span"卡片式（342原展示方式），"table"列表形式展示。
				allowEditsecretLevel : true, //是否允许修改密级
				accept : undefined,//可上传的文件类型，参考webupload的
				beforeUpload : function(files) {
				}, //上传前调用，返回false不能上传
				afterUpload : function() {
				}, //上传完调用
				uploadError : function() {
				}, //上传失败调用
				ready : function() {

				}//初始化完成后调用
			</code>
		</pre>
	</div>
</div>



<!-- 引入prism.js文件 -->
<script type="text/javascript" src="avicit/platform6/console/demostorage/js/prism.js" ></script>
   </div>
</div>
</body>
</body>
</html>