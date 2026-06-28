<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	

	
    <link href="static/h5/bootstrap/3.3.4/css_default/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="static/h5/datepicker/css/bootstrap-datetimepicker.css" rel="stylesheet" media="screen">
    
    <!-- 要加在样式最后面，使BS3支持IE8 -->
    <!--[if lte IE 9]>
		<script src="static/h5/bootstrap/respond.min.js" type="text/javascript" ></script>
		<script src="static/h5/bootstrap/html5shiv.js" type="text/javascript" ></script>
	<![endif]-->
</head>

<body>
<div class="container">
    <form action="" class="form-horizontal"  role="form">
        <fieldset>
            <legend>Test</legend>
            <div class="form-group">
                <label for="dtp_input1" class="col-md-2 control-label">DateTime Picking</label>
                <div class="input-group date form_datetime col-md-5">
                    <input class="form-control" size="16" type="text" value="" readonly>
                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
					<span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                </div>
            </div>
			<div class="form-group">
                <label for="dtp_input2" class="col-md-2 control-label">Date Picking</label>
                <div class="input-group date form_date col-md-5" >
                    <input class="form-control" size="16" type="text" value="" readonly>
                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
					<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                </div>
            </div>
			<div class="form-group">
                <label for="dtp_input3" class="col-md-2 control-label">Time Picking</label>
                <div class="input-group date form_time col-md-5">
                    <input class="form-control" size="16" type="text" value="" readonly>
                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
					<span class="input-group-addon"><span class="glyphicon glyphicon-time"></span></span>
                </div>
            </div>
            
            
            <div class="form-group">
                <label for="dtp_input2" class="col-md-2 control-label">Range Picking</label>
                <div class="input-group date form_range col-md-5" >
                    <input class="form-control" size="16" type="text" value="" readonly>
                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
					<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                </div>
            </div>
            
        </fieldset>
    </form>
    <hr/>
    已兼容IE8，完整代码和说明请参考https://github.com/smalot/bootstrap-datetimepicker
</div>

<script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.min.js" charset="UTF-8"></script>
<script type="text/javascript" src="static/h5/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script type="text/javascript" src="static/h5/datepicker/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
<script type="text/javascript" src="static/h5/datepicker/js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
<script type="text/javascript">
    $('.form_datetime').datetimepicker({
        language:  'zh-CN',
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		format: 'yyyy-mm-dd hh:ii',
        pickerPosition: "bottom-left"
    });
	$('.form_date').datetimepicker({
        language:  'zh-CN',
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		minView: 2,
		format: 'yyyy-mm-dd',
        pickerPosition: "bottom-left"
    });
	$('.form_time').datetimepicker({
        language:  'zh-CN',
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		format: 'hh:ii',
		startView: 1,
		minView: 0,
		maxView: 1,
        pickerPosition: "bottom-left"
    });
	$('.form_range').datetimepicker({
        language:  'zh-CN',
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		minView: 2,
		format: 'yyyy-mm-dd',
		startDate:'2017-04-10',
		endDate:'2017-04-20',
        opens:"left",
        drops:'up',
        pickerPosition: "bottom-left"
    });
	
</script>

</body>
</html>
