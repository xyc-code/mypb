$(function() {
	$("#form").validate({
		rules: {
			applyDate: "required",
			email: {
				required: true,
				email: true
			},
			place: "required",
			wine: {
				required: true,
				minlength: 5
			},
			cigaretteRequire: {
				required: true
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			"spam[]": {
				required: true
			},
			deptType: "required",
			satisfactionSurvey:"required",
			integerOnly: {
				digits: true
			},
			numberOnly: {
				number: true
			},
			rangeValidate: {
				range: [100, 2000] // �� min:100, max:2000	
			},
			xiaoshu3: {
				decimalLength: 3
			},
			phone: {
				mobile: true
			},
			idcard: {
				idcardno: true
			},
			remoteValidate: {
				remote: {
					url: "platform/h5demo/table/ajaxValid",
					type: "post",
					data: {
						para: function() {
							return $("#remoteValidate").val();
						}
					},
					dataFilter: function(data) { //
						if (data == "true") {
							return true;
						} else {
							return false;
						}
					}
				}
			}
		}
	});
});