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
	<form id="myform" method="post" action="" style="margin: 10px"
		class="form-horizontal">
		<div class="form-group">
			<label for="myname" class="col-sm-2 control-label">用户名：</label>
			<div class="col-sm-5">
				<input id="myname" name="myname" class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<label for="email" class="col-sm-2 control-label">E-Mail：</label>
			<div class="col-sm-5">
				<input id="email" name="email" class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<label for="password" class="col-sm-2 control-label">登陆密码：</label>
			<div class="col-sm-5">
				<input id="password" name="password" type="password"
					class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<label for="confirm_password" class="col-sm-2 control-label">确认密码：</label>
			<div class="col-sm-5">
				<input id="confirm_password" name="confirm_password"
					class="form-control" type="password" />
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">性别：</label>
			<div class="col-sm-5">
				<div class="radio">
					<label> <input type="radio" id="gender_male" value="m"
						name="gender" />男
					</label> <label> <input type="radio" id="gender_female" value="f"
						name="gender" />女
					</label>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="spam_mail" class="col-sm-2 control-label">爱好：</label>
			<div class="col-sm-5">
				<div class="checkbox">
					<label> <input type="checkbox" id="spam_a" value="spam_a"
						name="spam[]" />篮球
					</label>
					<label><input type="checkbox" id="spam_b" value="spam_b"
						name="spam[]" />羽毛球</label>
					<label><input type="checkbox" id="spam_c" value="spam_c"
						name="spam[]" />足球</label>
						<label><input type="checkbox" id="spam_c" value="spam_c"
						name="spam[]" />足球</label>
						<label><input type="checkbox" id="spam_c" value="spam_c"
						name="spam[]" />足球</label>
						<label><input type="checkbox" id="spam_c" value="spam_c"
						name="spam[]" />足球</label>
						<label><input type="checkbox" id="spam_c" value="spam_c"
						name="spam[]" />足球</label>
						<label><input type="checkbox" id="spam_c" value="spam_c"
						name="spam[]" />足球</label>
				</div>
			</div>
		</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">城市：</label>
			<div class="col-sm-5">
				<select id="jungle" name="jungle" class="form-control">
					<option value=""></option>
					<option value="1">厦门</option>
					<option value="2">泉州</option>
					<option value="3">Hongkang</option>
				</select>
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">只能输整数</label>
			<div class="col-sm-5">
				<input id="integerOnly" name="integerOnly" class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">可以输整数或小数</label>
			<div class="col-sm-5">
				<input id="numberOnly" name="numberOnly" class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">数值范围验证（100-2000）</label>
			<div class="col-sm-5">
				<input id="rangeValidate" name="rangeValidate" class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">不超过三位小数</label>
			<div class="col-sm-5">
				<input id="xiaoshu3" name="xiaoshu3" class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">手机号</label>
			<div class="col-sm-5">
				<input id="phone" name="phone" class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">身份证号</label>
			<div class="col-sm-5">
				<input id="idcard" name="idcard" class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">ajax校验(zhangsan)</label>
			<div class="col-sm-5">
				<input id="remoteValidate" name="remoteValidate" class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-12">
				<input class="btn btn-primary" type="submit" value="校验" />
			</div>
		</div>
	</form>
	<script src="avicit/platform6/h5demo/validation/index-validate.js"></script>
	<style>
		form input.error{
		    color:#F00;
		    border: 1px solid #CE7979;
		    background:#FFF7FA;
		}
		form label.error{
		    color:#F00;
		}
	</style>
</body>
</html>