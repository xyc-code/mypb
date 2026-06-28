<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<head>
	<title>数字输入控件</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<!-- 公用的 -->
	<link href="static/h5/bootstrap/3.3.4/css_default/bootstrap.min.css" type="text/css" rel="stylesheet">
	<script src="static/h5/jquery/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="static/h5/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script>
	<!-- 图标 -->
	<link rel="stylesheet" href="static/h5/font-awesome-4.7.0/css/font-awesome.min.css">
	<!--spinner -->
	<link href="static/h5/jquery.spinner-master/dist/css/bootstrap-spinner.min.css" rel="stylesheet" type="text/css" />
	<script src="static/h5/jquery.spinner-master/dist/js/jquery.spinner.js" type="text/javascript"></script>
	
	<script type="text/javascript">
	  $(function() {
		  /**
		   * changed事件，需加载完元素后
		   */
		  $('#spinner-changed').spinner('changed', function(e, newValue, oldValue) {
			  $('#old-val').text(oldValue);
		      $('#new-val').text(newValue);
	      })
	      
	      /**
		   * changing事件，需加载完元素后
		   */
	      $("#spinner-changing").spinner('changing', function(e, newValue, oldValue) {
	    	  $('#old-val2').text(oldValue);
		      $('#new-val2').text(newValue);
	      });
		
	  });
	  
	  function setReadonly(){
		  $('#ffff').prop('readonly', !$('#ffff').prop('readonly'));
	  }
	  
	  function setDisabled(){
		  $('#ffff').prop('disabled', !$('#ffff').prop('disabled'));
	  }
	</script>
</head>
<body>
<table class="table table-bordered  table-condensed  dataTable no-footer">
	<tbody>
		<tr>
			<td rowspan="2">
			     使用默认规则<br>
			      通过data-rule="quantity" 设置,具体规则如下 <br>
			  currency: { min: 0.00, max: null, step: 0.01, precision: 2 },<br>
			  quantity: { min: 1, max: 999, step: 1, precision:0 },<br>
			  percent:  { min: 1, max: 100, step: 1, precision:0 },<br>
			  month:    { min: 1, max: 12, step: 1, precision:0 },<br>
			  day:      { min: 1, max: 31, step: 1, precision:0 },<br>
			  hour:     { min: 0, max: 23, step: 1, precision:0 },<br>
			  minute:   { min: 1, max: 59, step: 1, precision:0 },<br>
			  second:   { min: 1, max: 59, step: 1, precision:0 }
			</td>
			<td>
				currency
				<input type="button" value="只读" onclick="setReadonly()">
				<input type="button" value="禁用" onclick="setDisabled()">
			</td>
			<td>
				<div class="input-group spinner" data-trigger="spinner">
		            <input type="text" class="form-control text-center" id="ffff" value="" data-rule="currency">
		            <span class="input-group-addon">
		              <a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
		              <a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
		            </span>
		         </div>
           	</td>
		</tr>
		<tr>
			<td>quantity</td>
			<td>
				<div class="input-group spinner" data-trigger="spinner">
				  <input type="text" class="form-control text-center" value="" data-rule="quantity">
				  <span class="input-group-addon">
				    <a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
				    <a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
				  </span>
				</div>
			</td>
		</tr>
		<tr>
			<td>
			             自定义最大值，最小值，步长和小数位<br/>
			          如：data-min="2" 最小值<br/>
			      data-max="12" 最大值 <br/>
			      data-step="4" 步长<br/>
			      data-precision="3"小数位
			</td>
			<td></td>
			<td>
				<div class="input-group spinner" data-trigger="spinner">
		            <input type="text" class="form-control text-center" value="4" data-min="2" data-max="12" data-step="4" data-precision="3">
		            <span class="input-group-addon">
		              <a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
		              <a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
		            </span>
		         </div>
           	</td>
		</tr>
		<tr>
			<td rowspan="2">
			             支持事件
			</td>
			<td>changed事件<br>
			  <p>
	            Old = <span id="old-val"></span>, New = <span id="new-val"></span>
	          </p>
			</td>
			<td>
				<div class="input-group spinner" data-trigger="spinner" id="spinner-changed">
		            <input type="text" class="form-control text-center">
		            <span class="input-group-addon">
		              <a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
		              <a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
		            </span>
		         </div>
           	</td>
		</tr>
		<tr>
			<td>changing事件<br>
			   <p>
	            Old = <span id="old-val2"></span>, New = <span id="new-val2"></span>
	          </p>
			</td>
			<td>
				<div class="input-group spinner" data-trigger="spinner" id="spinner-changing">
		            <input type="text" class="form-control text-center">
		            <span class="input-group-addon">
		              <a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
		              <a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
		            </span>
		         </div>
           	</td>
		</tr>
		<tr>
			<td rowspan="2">
			            问题
			</td>
			<td>初始化值得问题</td>
			<td>
				就算不设置value或者将value设置为空，此控件也会默认设置一个值。
				(已修改源码)
           	</td>
		</tr>
		<tr>
			<td>代码复杂</td>
			<td>
				代码写法复杂，没有封装自动生成代码。
           	</td>
		</tr>
	</tbody>

</table>
	<div class="input-group spinner" data-trigger="spinner">
	  <input title="住宿费" type="text" class="form-control input-sm" name="hotel" id="hotel" data-rule="quantity">
	  <span class="input-group-addon">
	    <a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
	    <a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
	  </span>
	 </div>
</body>
</html>