<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<head>
<title>表单校验demo</title>
<base href="<%=ViewUtil.getRequestPath(request)%>" />
<!-- 下面这两行要加，不然样式有问题 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<script src="static/h5/jquery/jquery-1.9.1.min.js"
	type="text/javascript"></script>
<script src="static/h5/jquery-validation/1.14.0/jquery.validate.min.js"
	type="text/javascript"></script>
<script src="avicit/platform6/h5demo/validation/validate-ext.js"
	type="text/javascript"></script>

<script
	src="static/h5/jquery-validation/1.14.0/localization/messages_zh.min.js"
	type="text/javascript"></script>

<link href="static/h5/bootstrap/3.3.4/css_default/bootstrap.min.css"
	type="text/css" rel="stylesheet" />
<script src="static/h5/bootstrap/3.3.4/js/bootstrap.min.js"
	type="text/javascript"></script>
<link href="static/h5/font-awesome-4.7.0/css/font-awesome.min.css"
	rel="stylesheet" />

<!--[if lte IE 9]>
<script src="static/h5/bootstrap/respond.min.js"></script>
<script src="static/h5/bootstrap/html5shiv.js"></script>
<![endif]-->

</head>
<body>
	<form id="myform" method="post" action="">
		<table class="table table-bordered " style="width: 50%">
			<tr>
				<td>用户名：</td>
				<td><input id="myname" name="myname" class="form-control" /></td>
			</tr>
			<tr>
				<td>E-Mail：</td>
				<td><input id="email" name="email" class="form-control" /></td>
			</tr>
			<tr>
				<td>登陆密码：</td>
				<td><input id="password" name="password" type="password"
					class="form-control" /></td>
			</tr>
			<tr>
				<td>确认密码：</td>
				<td><input id="confirm_password" name="confirm_password"
					class="form-control" type="password" /></td>
			</tr>
			<tr>
				<td>性别：</td>
				<td><label><input type="radio" id="gender_male" value="m"
					name="gender" />男 </label><label><input type="radio" id="gender_female" value="f"
					name="gender" />女</label></td>
			</tr>
			<tr>
				<td>爱好：</td>
				<td><label> <input type="checkbox" id="spam_a"
						value="spam_a" name="spam[]" />篮球
				</label> <label><input type="checkbox" id="spam_b" value="spam_b"
						name="spam[]" />羽毛球</label> <label><input type="checkbox"
						id="spam_c" value="spam_c" name="spam[]" />足球</label></td>
			</tr>
			<tr>
				<td>城市：</td>
				<td><select id="jungle" name="jungle" class="form-control">
						<option value=""></option>
						<option value="1">厦门</option>
						<option value="2">泉州</option>
						<option value="3">Hongkang</option>
				</select></td>
			</tr>
			<tr>
				<td>只能输整数</td>
				<td><input id="integerOnly" name="integerOnly"
					class="form-control" /></td>
			</tr>
			<tr>
				<td>可以输整数或小数</td>
				<td><input id="numberOnly" name="numberOnly"
					class="form-control" /></td>
			</tr>
			<tr>
				<td>数值范围验证（100-2000）</td>
				<td><input id="rangeValidate" name="rangeValidate"
					class="form-control" /></td>
			</tr>
			<tr>
				<td>不超过三位小数</td>
				<td><input id="xiaoshu3" name="xiaoshu3" class="form-control" />
				</td>
			</tr>
			<tr>
				<td>手机号</td>
				<td><input id="phone" name="phone" class="form-control" /></td>
			</tr>
			<tr>
				<td>身份证号</td>
				<td><input id="idcard" name="idcard" class="form-control" /></td>
			</tr>
			<tr>
				<td>ajax校验(zhangsan)</td>
				<td><input id="remoteValidate" name="remoteValidate"
					class="form-control" /></td>
			</tr>
			<tr>
				<td colspan="4"><center><input class="btn btn-primary" type="submit"
					value=" 校 验 " /></center></td>
			</tr>
		</table>
	</form>
	<hr/>
	通过IE8、9、CHROME验证。<br/>
	基于jquery validate实现，扩展了校验规则和样式，扩展代码在validate-ext.js中，本页面基于tr td布局。
	<script src="avicit/platform6/h5demo/validation/index-validate.js"></script>
	<style>
		form input.error {
			color: #F00;
			border: 1px solid #CE7979;
			background: #FFF7FA;
		}
	</style>
</body>
</html>